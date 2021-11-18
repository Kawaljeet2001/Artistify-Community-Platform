import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const BackToHomeLink = () => {
  return (
    <a
      className="flex items-center text-lightblue absolute left-10 top-10 hover:scale-105 transform transition duration-200"
      style={{ fontSize: "14px" }}
      rel="noreferrer"
      href="/"
    >
      <BsArrowLeft className="mr-1.5 " /> back to Home
    </a>
  );
};

export default BackToHomeLink;
