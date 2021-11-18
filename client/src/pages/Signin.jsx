import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Textfield from "../components/FormFields/Textfield";
import PasswordField from "../components/FormFields/PasswordField";
import { Link, Redirect } from "react-router-dom";
import { useLocation } from "react-router";
import LoadingFullscreen from "../components/LoadingFullscreen";
import { useSelector, useDispatch } from "react-redux";
import { setUserLogin } from "../Redux/Slices/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackToHomeLink from "../components/BackToHomeLink";

const Signin = () => {
  const [doneSubmit, setdoneSubmit] = React.useState(false);
  const [loginRedirect, setloginRedirect] = React.useState(false);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const location = useLocation();
  const signinUser = async (data) => {
    try {
      const res = await axios.post("/api/auth/login", data, {
        withCredentials: true,
      });
      if (res) {
        setloginRedirect(true);
        dispatch(setUserLogin(res.data.data));
      }
    } catch (err) {
      setdoneSubmit(false);
      toast.error(err.response.data.message);
    }
  };

  const onSubmit = async (data) => {
    setdoneSubmit(true);
    signinUser(data);
  };

  return (
    <>
      {" "}
      {user && <Redirect to={`/u/${user["username"]}`} />}
      <div className="bg-darkBlack w-full min-h-screen h-full overflow-y-auto flex py-10 items-center justify-center ">
        <BackToHomeLink/>
        <ToastContainer
          hideProgressBar
          autoClose={3000}
          theme="colored"
          bodyClassName="font-bold text-sm"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-black3 w-10/12 md:w-8/12 lg:w-5/12 rounded-lg bg-opacity-60 pt-6 pb-12 px-6 md:px-12 flex flex-col"
        >
          {doneSubmit && <LoadingFullscreen />}
          {loginRedirect && user && (
            <Redirect
              to={{
                pathname: `/u/${user["username"]}`,
                state: {
                  from : location.pathname
                },
              }}
            />
          )}
          <div className="mb-6 mt-2">
            <h2 className="text-white font-medium text-xl mb-10">ARTISTIFY</h2>
            <h1 className="text-white text-3xl font-medium">Sign In</h1>
            <p className="text-gray-300 mt-3 font-light text-lg">
              Login to join the leading showcase platform for games, file, media
              & entertainment artists.
            </p>
          </div>
          <Textfield
            register={register("email", { required: "Email is required!" })}
            lable={"Email"}
            placeholder={"Eg. jason@bourne.com"}
            errors={errors}
            fieldname={"email"}
            errorMessage={"Not a valid email/ Email Already exists"}
          />
          <PasswordField
            register={register("password", {
              required: "Password cannot be empty!",
            })}
            lable={"Password"}
            errors={errors}
            fieldname={"password"}
          />
          <button
            type="submit"
            className="bg-lightblue px-3 py-2.5 text-white rounded-sm w-40"
          >
            Sign In
          </button>

          <div className="flex items-center justify-between mt-20">
            <Link to="/users/forgotpassword" className="text-lightblue">
              Forgot Password ?
            </Link>
            <Link to="/signup" className="text-lightblue">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
