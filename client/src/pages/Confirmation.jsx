import React from "react";
import { useLocation } from "react-router";
import { Redirect } from "react-router-dom";
import { TiTick } from "react-icons/ti";

const Confirmation = () => {
  const location = useLocation();
  return (
    <>
      {location.state && location.state.type === "forgot-password" ? (
        <div
          className="bg-darkBlack w-full min-h-screen h-full 
            overflow-y-auto flex flex-col py-10 items-center justify-center "
        >
          <TiTick className="text-green-500" style={{ fontSize: "150px" }} />
          <h2 className="text-white mt-2 text-4xl font-medium text-center">
            Password Reset Email Sent
          </h2>
          <p className="text-gray-400 mt-6 w-6/12 text-lg text-center">
            An email has been sent to your mail address,{" "}
            <span className="text-lightblue font-medium">
              {location.state.data}
            </span>
            . Follow the directions in the email to reset your password.
          </p>
          <a
            href="/signin"
            rel="noreferrer"
            className="bg-lightblue hover:bg-lightbluehover px-3 py-2.5 text-center mt-6 text-white rounded-sm w-40 transition duration-200"
          >
            Done
          </a>
        </div>
      ) : location.state && location.state.type === "reset-password" ? (
        <div
          className="bg-darkBlack w-full min-h-screen h-full 
        overflow-y-auto flex flex-col py-10 items-center justify-center "
        >
          <TiTick className="text-green-500" style={{ fontSize: "150px" }} />
          <h2 className="text-white mt-2 text-4xl font-medium text-center">
            Password successfully reset.
          </h2>
          <p className="text-gray-400 mt-6 w-6/12 text-lg text-center">
            Your password has been updated. Login again.
          </p>
          <a
            href="/signin"
            rel="noreferrer"
            className="bg-lightblue hover:bg-lightbluehover px-3 py-2.5 text-center mt-6 text-white rounded-sm w-40 transition duration-200"
          >
            Signin
          </a>
        </div>
      ) : (
        <Redirect to="/404" />
      )}
    </>
  );
};

export default Confirmation;
