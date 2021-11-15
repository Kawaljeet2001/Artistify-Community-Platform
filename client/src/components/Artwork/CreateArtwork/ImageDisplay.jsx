import React from "react";
import { MdDeleteForever } from "react-icons/md";

const ImageDisplay = ({ item, deleteImage, index }) => {
  const [imageStyle, setImageStyle] = React.useState(null);
  return (
    <div className="text-white h-50v col-span-1 bg-black border relative border-gray-500 border-opacity-60">
      <MdDeleteForever
        className="absolute text-xl text-red-600  right-1 top-1 cursor-pointer"
        onClick={() => deleteImage([item.imageName, index])}
      />
      <div className="h-4/5  bg-green overflow-hidden flex items-center justify-center">
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
      </div>
      <div className="p-3 bg-black3 bg-opacity-60 h-1/5 flex items-center justify-center">
        {item.imageName}
      </div>
    </div>
  );
};

export default ImageDisplay;
