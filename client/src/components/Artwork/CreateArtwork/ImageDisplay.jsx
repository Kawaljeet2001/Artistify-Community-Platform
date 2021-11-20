import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageDisplay = ({ item, deleteImage, index }) => {
  return (
    <div
      className="text-white h-50v col-span-1  flex flex-col justify-between bg-black border border-gray-500 border-opacity-60"
      style={{ height: "60vh" }}
    >
      <div className="w-full flex justify-end pr-2 pt-2 ">
        <MdDeleteForever
          className="z-10 w-5 h-5 text-xl text-red-600  justify-end cursor-pointer"
          onClick={() => deleteImage(item.imageName, index)}
        />
      </div>

      <div className="h-full bg-green overflow-hidden flex items-center justify-center">
        <LazyLoadImage
          effect="blur"
          src={item.imageURL}
          alt=""
          className=""
          style={{
            maxHeight: "50vh",
          }}
        />
      </div>
      <div className="h-6 w-full"></div>
    </div>
  );
};

export default ImageDisplay;
