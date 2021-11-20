import "./App.css";
import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
// import PublicHeader from "./components/PublicHeader";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserLogin } from "./Redux/Slices/userSlice";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
// import LoadingFullscreen from "./components/LoadingFullscreen";
import ProtectedRoute from "./components/ProtectedRoute";
import BlackLoadingFullscreen from "./components/BlackLoadingFullscreen";
const LazySignin = React.lazy(() => import("./pages/Signin"));
const LazySignup = React.lazy(() => import("./pages/Signup"));
const LazyDashboard = React.lazy(() => import("./pages/Dashboard"));
const LazyArtworkDetailPage = React.lazy(() =>
  import("./pages/ArtworkDetailPage")
);
const LazyCreateArtwork = React.lazy(() => import("./pages/CreateArtwork"));
const LazySettings = React.lazy(() => import("./pages/Settings"));
const LazyPortfolio = React.lazy(() => import("./pages/Portfolio"));
const LazyForgotPassword = React.lazy(() => import("./pages/ForgotPassword"));
const LazyConfirmation = React.lazy(() => import("./pages/Confirmation"));
const LazyResetPassword = React.lazy(() => import("./pages/ResetPassword"));
const LazyAbout = React.lazy(() => import("./pages/About"));

function App({ location }) {
  const dispatch = useDispatch();
  const [checkUserStatus, setcheckUserStatus] = React.useState(false);

  const checkLogin = async () => {
    try {
      const res = await axios.post(
        "/api/auth/checklogin",
        {},
        { withCredentials: true }
      );

      if (res) {
        if (res.data.type === "SUCCESS") {
          dispatch(setUserLogin(res.data.data));

          setcheckUserStatus(true);
        }
      }
    } catch (err) {
      setcheckUserStatus(true);
      console.log(err);
    }
  };

  React.useEffect(() => {
    checkLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {checkUserStatus && (
        <>
          {location.pathname !== "/signin" &&
            location.pathname !== "/signup" &&
            location.pathname !== "/users/forgotpassword" &&
            location.pathname !== "/confirmation" &&
            !location["pathname"].includes("/resetpassword") &&
            location.pathname !== "/404" && <Navbar />}
          <Suspense fallback={<BlackLoadingFullscreen />}>
            <Switch>
              <Route path="/signup" exact>
                <LazySignup />
              </Route>
              <Route path="/signin" exact>
                <LazySignin />
              </Route>
              <Route path="/portfolio" exact>
                <LazyPortfolio />
              </Route>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/u/:username">
                <LazyDashboard />
              </Route>
              <Route path="/about" exact>
                <LazyAbout />
              </Route>
              <Route path="/artwork/:artworkid" exact>
                <LazyArtworkDetailPage />
              </Route>
              <ProtectedRoute path = "/projects/new" exact component = {LazyCreateArtwork}/>
              <ProtectedRoute path = "/myartistify/edit" component = {LazySettings}/>
              <Route path="/users/forgotpassword">
                <LazyForgotPassword />
              </Route>
              <Route path="/resetpassword/:resetToken">
                <LazyResetPassword />
              </Route>
              <Route path="/confirmation">
                <LazyConfirmation />
              </Route>
              <Route path="/404">
                <NotFound />
              </Route>
              <Redirect to="/404" />
            </Switch>
          </Suspense>
          {location.pathname !== "/signin" &&
            location.pathname !== "/signup" &&
            location.pathname !== "/users/forgotpassword" &&
            location.pathname !== "/confirmation" &&
            !location["pathname"].includes("/resetpassword") &&
            location.pathname !== "/404" && <Footer />}
        </>
      )}
    </>
  );
}

export default withRouter(App);
