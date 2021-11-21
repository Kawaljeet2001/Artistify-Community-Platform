import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const BackToHomeLink = () => {
  return (
    <Link
      className="flex items-center text-lightblue absolute left-10 top-4 lg:top-10 hover:scale-105 transform transition duration-200"
      style={{ fontSize: "14px" }}
      to="/"
    >
      <BsArrowLeft className="mr-1.5 " /> back to Home
    </Link>
  );
};

export default BackToHomeLink;
