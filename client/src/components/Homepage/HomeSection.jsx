import React from "react";
import { Link } from "react-router-dom";
import background from "../../images/homesection2.jpg";

const HomeSection = () => {
  return (
    <div
      className="bg-darkBlack relative py-12 px-20 h-90v bg-center bg-no-repeat flex  justify-start mb-10"
      style={{
        backgroundImage: `url(${background})`,
        boxShadow: "rgba(0,0,0,0.1) 0 0 0 10000px inset",
      }}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r z-10 from-black"></div>
      <div className="text-white flex flex-col w-6/12 z-20 my-auto">
        <p className="text-lightblue font-medium">ARTISTIFY</p>
        <h3 className="text-4xl font-medium mt-1">
          World's leading platform for Artists
        </h3>
        <p className="text-gray-300 mt-2">
          Join the world's largest community of artists making their online
          presence felt in the industry and advance your career.
        </p>
        <Link
          to="/signin"
          className="bg-lightblue px-3 py-2 font-medium w-36 mt-4 rounded-md text-center hover:bg-lightbluehover"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomeSection;
