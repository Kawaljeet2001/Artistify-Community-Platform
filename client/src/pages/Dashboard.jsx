/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router";
import {
  NavLink,
  Link,
  useRouteMatch,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PortfolioBanner from "../components/PortfolioBanner";
import ArtworkThumbnailTitle from "../components/Artwork/ArtworkThumbnailTitle";
import DashboardAbout from "../components/DashboardAbout";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Dashboard = ({ scrollPosition }) => {
  const { username } = useParams();
  const history = useHistory();
  const { path, url } = useRouteMatch();
  const [artworks, setArtworks] = React.useState();
  const [userDetails, setUserDetails] = React.useState();
  const user = useSelector((state) => state.user.value);

  const getDetails = async () => {
    try {
      const res = await axios.get(`/api/artwork/u/${username}`, {
        withCredentials: true,
      });
      setArtworks(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const [redirect, setRedirect] = React.useState(false);
  const getUserDetails = async () => {
    try {
      const res = await axios.get(`/api/user/profile/${username}`, {
        withCredentials: true,
      });
      setUserDetails(res.data.data);
    } catch (err) {
      if (err.response.data.type && err.response.data.type === "404") {
        setRedirect(true);
      }
    }
  };
  React.useEffect(() => {
    getDetails();
    getUserDetails();
    if (
      history &&
      history.location &&
      history.location.state &&
      (history.location.state.from === "/signin" ||
        history.location.state.from === "/signup")
    ) {
      toast.success("Successfully Signed in!");
    }
    if (user) document.title = "Artistify - " + user.fullname;
  }, []);

  return (
    <div className="">
      {redirect && <Redirect to="/404" />}
      <div className="bg-darkBlack flex flex-col items-center">
        <ToastContainer
          hideProgressBar
          autoClose={3000}
          theme="colored"
          bodyClassName="font-bold text-sm"
        />
        <PortfolioBanner userDetails={userDetails} />
        <div className="bg-dark3 flex items-center bg-black w-full px-4 justify-center">
          <NavLink
            className="bg-transparent text-white px-3 py-3"
            activeClassName="bg-darkBlack text-lightblue px-3 py-3"
            to={`${url}`}
            exact
          >
            Artworks
          </NavLink>
          <NavLink
            className="bg-transparent text-white px-3 py-3"
            activeClassName="bg-darkBlack text-lightblue px-3 py-3"
            to={`${url}/profile`}
          >
            About
          </NavLink>
        </div>

        <Switch>
          <Route path={path} exact>
            <div style={{ minHeight: "50vh" }}>
              <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-0.5 w-full mt-8 h-full">
                {artworks
                  ? artworks.map((item, index) => (
                      <Link
                        className={`bg-black group w-full inset-0 cursor-pointer relative`}
                        key={index}
                        to={`/artwork/${item._id}`}
                      >
                        <LazyLoadImage
                          effect="blur"
                          src={item.thumbnailURL}
                          alt="this is alternate image name"
                          height="full"
                          width="full"
                          className="w-full object-cover object-center "
                          scrollPosition={scrollPosition}
                        />
                        <ArtworkThumbnailTitle
                          userDetails={userDetails}
                          artworkDetails={artworks[index]}
                        />
                      </Link>
                    ))
                  : null}
              </div>
            </div>
          </Route>
          <Route path={`${path}/profile`}>
            <DashboardAbout userDetails={userDetails} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default trackWindowScroll(Dashboard);
