import React from "react";
import { Redirect, useParams } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";
import PasswordField from "../components/FormFields/PasswordField";
import LoadingFullscreen from "../components/LoadingFullscreen";

const ResetPassword = () => {
  const { resetToken } = useParams();
  const [tokenError, setTokenError] = React.useState(false);
  const [display, setDisplay] = React.useState(false);
  const [doneSubmit, setDoneSubmit] = React.useState(false);
  const [resetDone, setResetDone] = React.useState(false);
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    updatePassword({ password: data.password });
  };
  const checkValidResetToken = async () => {
    try {
      const res = await axios.post("/api/auth/validresettoken", {
        resetToken: resetToken,
      });
      if (res) {
        setDisplay(true);
      }
    } catch (err) {
      setTokenError(true);
    }
  };

  const updatePassword = async (data) => {
    try {
      const res = await axios.post(
        `/api/auth/resetpassword/${resetToken}`,
        data
      );
      if (res) {
        setDoneSubmit(true);
        setResetDone(true);
      }
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    checkValidResetToken();
  }, []);
  return (
    <>
      {display && (
        <div
          className="bg-darkBlack w-full min-h-screen h-full 
        overflow-y-auto flex py-10 items-center justify-center "
        >
          {doneSubmit && <LoadingFullscreen />}
          {tokenError && <Redirect to="/404" />}
          {resetDone && (
            <Redirect
              to={{
                pathname: "/confirmation",
                state: {
                  type: "reset-password",
                  message: "Password Reset Successfull",
                },
              }}
            />
          )}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-black3 w-10/12 md:w-8/12 lg:w-5/12 rounded-lg bg-opacity-60 py-16 px-6 md:px-12 flex flex-col"
          >
            <div className="mb-6 mt-2">
              <h1 className="text-white text-3xl font-medium">
                Reset your password
              </h1>
              <p className="text-gray-300 font-light text-lg mt-3 mb-8">
                Create a new password for your account
              </p>
            </div>
            <PasswordField
              register={register("password", {
                required: "Password cannot be empty!",
              })}
              lable={"New Password"}
              errors={errors}
              fieldname={"password"}
            />
            <PasswordField
              register={register("confirmpassword", {
                required: "Confirm Password is required!",
                validate: (e) => e === getValues("password"),
              })}
              lable={"Confirm New Password"}
              errors={errors}
              fieldname={"confirmpassword"}
            />

            <button
              type="submit"
              className="bg-lightblue px-3 py-2.5 text-white rounded-sm w-40"
            >
              Update Password
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
