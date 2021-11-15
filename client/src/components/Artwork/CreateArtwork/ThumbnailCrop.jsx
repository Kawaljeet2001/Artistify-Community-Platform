import React from "react";
import Cropper from "react-easy-crop";
import { AiFillCloseCircle } from "react-icons/ai";
import { ImSpinner2 } from "react-icons/im";

const ThumbnailCrop = ({
  image,
  crop,
  zoom,
  onCropChange,
  aspect,
  onZoomChange,
  onCropComplete,
  perform,
  closeCrop,
  haveSubmit,
}) => {
  return (
    <div className="w-full h-screen z-40 fixed overflow-y-hidden top-0 flex justify-center bg-black left-0 bg-opacity-50 ">
      <div className="w-7/12 mt-20 bg-darkBlack h-70v py-6 relative ">
        {haveSubmit && (
          <div className="bg-black absolute top-0 left-0 overflow-y-hidden bg-opacity-80 h-full w-full z-50 flex items-center justify-center">
            <ImSpinner2 className="text-lightblue text-6xl animate-spin" />
          </div>
        )}
        <AiFillCloseCircle
          className="text-white font-bold text-3xl  right-2 top-2 absolute cursor-pointer"
          onClick={closeCrop}
        />
        <div className="relative mx-auto w-full h-60v bg-black mt-6">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            onCropChange={onCropChange}
            onZoomChange={onZoomChange}
            onCropComplete={onCropComplete}
          />
        </div>
        <div className="bg-darkBlack flex items-center justify-end py-4 px-6">
          <button
            className="text-white bg-lightblue py-2.5 items- px-4 rounded-md"
            type="button"
            onClick={perform("done")}
          >
            Crop
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThumbnailCrop;
