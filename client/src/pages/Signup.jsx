import React from "react";
import { useForm } from "react-hook-form";
import Textfield from "../components/FormFields/Textfield";
import PasswordField from "../components/FormFields/PasswordField";
import CheckboxField from "../components/FormFields/CheckboxField";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import { useLocation } from "react-router";
import LoadingFullscreen from "../components/LoadingFullscreen";
import { setUserLogin } from "../Redux/Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackToHomeLink from "../components/BackToHomeLink";

const Signup = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({});
  const location = useLocation();
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [doneSubmit, setdoneSubmit] = React.useState(false);
  const [loginRedirect, setloginRedirect] = React.useState(false);
  const signupUser = async (data) => {
    try {
      const res = await axios.post(
        "/api/auth/register",
        data
      );
      if (res) {
        //log in with new credentials
        const loginData = {
          email: data.email,
          password: data.password,
        };
        const loginres = await axios.post("/api/auth/login", loginData, {
          withCredentials: true,
        });
        if (loginres) {
          setloginRedirect(true);
          dispatch(setUserLogin(res.data.data));
        }
      }
    } catch (err) {
      toast.error(err.response.data.message);
      setdoneSubmit(false);
    }
  };

  const onSubmit = async (data) => {
    setdoneSubmit(true);
    const userData = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    signupUser(userData);
  };

  return (
    <div className="bg-darkBlack w-full min-h-screen h-full overflow-y-auto flex py-10 items-center justify-center ">
      {loginRedirect && user && (
        <Redirect
          to={{
            pathname: `/u/${user["username"]}`,
            state: {
              from: location.pathname,
            },
          }}
        />
      )}
      {!loginRedirect && user && <Redirect to={`/u/${user["username"]}`} />}
      <BackToHomeLink />
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
        <div className="flex items-center justify-center md:justify-end">
          <p className="text-gray-300">Already have an account? </p>
          <Link to="/signin" className="text-lightblue ml-2">
            Sign in
          </Link>
        </div>
        <div className="mb-6 mt-2">
          <h2 className="text-white font-medium text-xl mb-10">ARTISTIFY</h2>
          <h1 className="text-white text-3xl font-medium">Sign Up</h1>
          <p className="text-gray-300 mt-3 font-light text-lg">
            Join the leading showcase platform for games, file, media &
            entertainment artists.
          </p>
        </div>
        <Textfield
          register={register("username", {
            required: "Username cannot be empty!",
          })}
          lable={"Username"}
          placeholder={"Eg. Jason Bourne"}
          errors={errors}
          fieldname={"username"}
          errorMessage={"Username cannot be empt22y"}
        />
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
        <PasswordField
          register={register("confirmpassword", {
            required: "Confirm Password is required!",
            validate: (e) => e === getValues("password"),
          })}
          lable={"Confirm Password"}
          errors={errors}
          fieldname={"confirmpassword"}
        />
        <CheckboxField
          lable={
            "By Creating an account, you agree to our Terms of Service and Privacy Policy."
          }
          register={register("checkbox", { required: "Check this box!" })}
          errors={errors}
          fieldname={"checkbox"}
        />
        <button
          type="submit"
          className="bg-lightblue px-3 py-2.5 text-white rounded-sm w-40"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
