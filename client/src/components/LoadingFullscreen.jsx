import React from "react";
import { ImSpinner2 } from "react-icons/im";

const LoadingFullscreen = () => {
  return (
    <div className="bg-black fixed top-0 left-0 overflow-y-hidden bg-opacity-80 h-screen w-full z-30 flex items-center justify-center">
      <ImSpinner2 className="text-lightblue text-6xl animate-spin" />
    </div>
  );
};

export default LoadingFullscreen;
