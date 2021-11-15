import React from "react";
import { useForm } from "react-hook-form";
import Textfield from "../components/FormFields/Textfield";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Redirect } from "react-router";
import LoadingFullscreen from "../components/LoadingFullscreen";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [doneSubmit, setdoneSubmit] = React.useState(false);
  const [mailSent, setMailSent] = React.useState(false);

  const postEmail = async (data) => {
    try {
      setdoneSubmit(true);
      const res = await axios.post("/api/auth/forgotpassword", data);
      if (res) {
        setMailSent(data.email);
      }
    } catch (err) {
      setdoneSubmit(false);
      toast.error(err.response.data.message);
    }
  };
  const onSubmit = (data) => {
    postEmail(data);
  };
  return (
    <div
      className="bg-darkBlack w-full min-h-screen h-full 
    overflow-y-auto flex py-10 items-center justify-center "
    >
      <ToastContainer
        hideProgressBar
        autoClose={3000}
        theme="colored"
        bodyClassName="font-bold text-sm"
      />
      {doneSubmit && <LoadingFullscreen />}
      {mailSent && (
        <Redirect
          to={{
            pathname: "/confirmation",
            state: {
              type: "forgot-password",
              message:
                "A mail has been sent to the entered email weith the reset password link.",
              data: mailSent,
            },
          }}
        />
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-black3 w-10/12 md:w-8/12 lg:w-5/12 rounded-lg bg-opacity-60 py-12 px-6 md:px-12 flex flex-col"
      >
        <div className="mb-6 mt-2">
          <h1 className="text-white text-3xl font-medium mb-6">
            Forgot Your Password?
          </h1>
          <p className="text-gray-300 font-light text-lg mt-8">
            No problem! Just fill in the email below and we'll send you password
            reset instructions!
          </p>
        </div>
        <Textfield
          register={register("email", { required: "Email is required!" })}
          lable={"Your Email"}
          placeholder={"email@example.com"}
          errors={errors}
          fieldname={"email"}
        />
        <button
          type="submit"
          className="bg-green-500 px-3 py-2.5 text-white rounded-sm w-40 hover:bg-green-600 transition duration-200"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
