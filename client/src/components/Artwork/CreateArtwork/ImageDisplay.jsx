import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ImageDisplay = ({ item, deleteImage, index }) => {
  const [imageStyle, setImageStyle] = React.useState(null);
  return (
    <div className="text-white h-40v col-span-1 bg-black border relative border-gray-500 border-opacity-60">
      <MdDeleteForever
        className="absolute text-xl text-red-600  right-1 top-1 cursor-pointer"
        onClick={() => deleteImage(item.imageName, index)}
      />
      <div className="h-full bg-green overflow-hidden flex items-center justify-center">
        <img
          src={item.imageURL}
          alt=""
          className={imageStyle}
          onLoad={(e) => {
            let height = e.target.naturalHeight;
            let width = e.target.naturalWidth;

            if (height > width) setImageStyle("h-full");
            else setImageStyle("w-full");
          }}
        />
        <LazyLoadImage
          effect="blur"
          src={item.imageURL}
          alt=""
          height={imageStyle === "h-full" && "full"}
          width={imageStyle === "w-full" && "full"}
          className={imageStyle}
          onLoad={(e) => {
            let height = e.target.naturalHeight;
            let width = e.target.naturalWidth;

            if (height > width) setImageStyle("h-full");
            else setImageStyle("w-full");
          }}
        />
      </div>
    </div>
  );
};

export default ImageDisplay;
