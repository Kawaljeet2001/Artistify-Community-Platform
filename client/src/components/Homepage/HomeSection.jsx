import React from "react";
import { Link } from "react-router-dom";

const HomeSection = () => {
  const allBackgrounds = [
    "https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/background%2Fhomesection3.jpg?alt=media&token=c4b38548-876e-4b92-a696-e421c0807c7c",
    "https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/background%2Fhomesection2.jpg?alt=media&token=4d5b1c04-d588-46fc-b4fb-62939431f6f7",
    "https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/background%2Fhomesection4.jpg?alt=media&token=1ec0c862-7cdf-46ea-9c22-76bb3dbb5f76",
    "https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/background%2Fhomesection5.jpg?alt=media&token=03b43478-aa98-4ea1-a853-93a4dbe1e61c",
    "https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/background%2Fhomesection6.jpg?alt=media&token=e2b6e145-12d9-4194-88f1-8ecb8c5c7125",
    "https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/background%2Fhomesection7.jpg?alt=media&token=a0904d75-ca6c-459e-a820-5674adda93f2",
  ];

  const randomChoice =
    allBackgrounds[Math.floor(Math.random() * allBackgrounds.length)];
  return (
    <div
      className="bg-darkBlack relative py-12 px-6 lg:px-20 h-90v bg-center bg-no-repeat flex  justify-start mb-10"
      style={{
        backgroundImage: `url(${randomChoice})`,
        boxShadow: "rgba(0,0,0,0.1) 0 0 0 10000px inset",
      }}
    >
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r z-10 from-black"></div>
      <div className="text-white flex flex-col items-center lg:items-start w-full lg:w-6/12 z-20 my-auto">
        <p className="text-lightblue font-medium text-center lg:text-left">ARTISTIFY</p>
        <h3 className="text-4xl font-medium mt-1 text-center lg:text-left">
          World's leading platform for Artists
        </h3>
        <p className="text-gray-300 mt-2 text-center lg:text-left">
          Join the world's largest community of artists making their online
          presence felt in the industry and advance your career.
        </p>
        <Link
          to="/signin"
          className="bg-lightblue px-3 py-2 justify-center font-medium w-36 mt-4 rounded-md text-center hover:bg-lightbluehover"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HomeSection;
