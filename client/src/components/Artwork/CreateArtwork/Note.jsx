import React from "react";

const Note = () => {
  return (
    <div className="bg-black3 bg-opacity-40 h-32 hidden lg:flex rounded-sm ">
      <div className="bg-yellow-500 w-2.5 h-full"></div>
      <div className="px-3 flex flex-col justify-center">
        <p className="text-gray-400 flex" style={{ fontSize: "13px" }}>
          {/* <RiLightbulbFlashLine className="text-yellow-500 text-4xl" /> */}
          Did you know that projects with multiple assets are on average 54%
          more popular than those with a single image?
        </p>
        <p className="text-gray-400 mt-2" style={{ fontSize: "13px" }}>
          Upload breakdown/process shots and get more visibility!
        </p>
      </div>
    </div>
  );
};

export default Note;
