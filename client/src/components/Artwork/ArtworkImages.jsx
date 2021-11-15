import React from "react";

const ArtworkImages = ({images}) => {
  return (
    <div className="flex items-center flex-col h-full w-9/12 mt-16">
      {images.map((item, index) => (
        <div key={index} className=" relative w-full h-70v flex items-center justify-center my-4 bg-black">
          <img
            src={item}
            className="object-contain h-full"
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default ArtworkImages;
