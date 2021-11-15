import React from "react";
import BackgroundImage from "../404.jpg";

const NotFound404 = () => {
  React.useEffect(() => {
    document.title = "Artistify - Oops! 404 Error";
  }, []);
  return (
    <div
      className="w-full h-screen flex items-start justify-center bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      <div className="bg-gradient-to-r from-black opacity-80 fixed w-full h-full top-0"></div>
      <div className="z-20 absolute left-10 top-1/4">
        <h1 className="text-white text-5xl font-bold">404</h1>
        <p className="text-2xl text-gray-500 mt-2">Page not found</p>
        <a
          href="/"
          className="bg-lightblue p-3 text-white block mt-12 text-sm text-center hover:bg-lightbluehover transition duration-200"
        >
          Go to Artistify home
        </a>
        <a href="/support" className="text-lightblue mt-4 block text-sm italic">
          Contact Artistify Support
        </a>
      </div>
    </div>
  );
};

export default NotFound404;
