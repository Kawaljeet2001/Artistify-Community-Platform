import React from "react";

const PublicHeader = () => {
  return (
    <div className="bg-black py-8 px-12 flex items-center justify-between">
      <div>
        <h1 className="text-white text-4xl font-medium">Kawaljeet Singh Batra</h1>
        <p className="text-gray-400 mt-2 text-sm">
          Creating CG Art using Blender and After Effects.
        </p>
      </div>
      <div className = "pr-20">
        <a href="/" className="text-white  mx-4">
          Home
        </a>
        <a href="/" target="_blank" className="text-white mx-4">
          Resume
        </a>
      </div>
    </div>
  );
};

export default PublicHeader;
