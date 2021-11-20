import React from "react";
import ThumbnailCrop from "./ThumbnailCrop";
import { getCroppedImgNew } from "../../../utils/croppImage";
import { HiUpload } from "react-icons/hi";
import { BiCrop } from "react-icons/bi";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebaseConfig";

const ThumbnailUpload = ({ setUploadedThumbnail }) => {
  const inputRef = React.useRef(null);
  const triggerInput = () => {
    inputRef.current.click();
  };

  const [openCrop, setOpenCrop] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const [displayimage, setDisplayImage] = React.useState(null);
  const [croppedImage, setCroppedImage] = React.useState(null);
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const [zoom, setZoom] = React.useState(1);
  const [haveSubmit, setHaveSubmit] = React.useState(false);
  const [thumbnailName, setThumbnailName] = React.useState(
    JSON.stringify(new Date().getTime())
  );
  const [croppedArea, setCroppedArea] = React.useState({
    width: 1277,
    height: 1277,
    x: 322,
    y: 0,
  });

  const onCropComplete = async (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = async (e) => {
    try {
      if (e.target.files && e.target.files.length > 0) {
        //perform the file uipload right here as well
        setImage(URL.createObjectURL(e.target.files[0]));
        const res = await getCroppedImgNew(
          URL.createObjectURL(e.target.files[0]),
          {
            width: 1277,
            height: 1277,
            x: 322,
            y: 0,
          }
        );
        const thumbnailRef = ref(storage, `artworkThumbnail/${thumbnailName}`);
        if (res) {
          const uploadedImage = await uploadBytes(thumbnailRef, res);
          if (uploadedImage) {
            const newThumbnailURL = await getDownloadURL(thumbnailRef);
            if (newThumbnailURL) {
              setDisplayImage(newThumbnailURL);
              setUploadedThumbnail(newThumbnailURL);
            }
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  const cropImage = async () => {
    try {
      const res = await getCroppedImgNew(image, croppedArea);
      setHaveSubmit(true);
      const thumbnailRef = ref(storage, `artworkThumbnail/${thumbnailName}`);
      if (res) {
        const uploadedImage = await uploadBytes(thumbnailRef, res);
        if (uploadedImage) {
          const newThumbnailURL = await getDownloadURL(thumbnailRef);
          if (newThumbnailURL) {
            setCroppedImage(newThumbnailURL);
            setUploadedThumbnail(newThumbnailURL);
            setOpenCrop(false);
            setHaveSubmit(false);
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="h-50v bg-black3 bg-opacity-40 mt-8">
      {image && openCrop && (
        <ThumbnailCrop
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropComplete}
          perform={(e) => cropImage}
          closeCrop={() => setOpenCrop(false)}
          haveSubmit={haveSubmit}
        />
      )}
      <div className="p-4">
        {croppedImage ? (
          <img src={croppedImage} alt="thumbnail" className="w-full h-full" />
        ) : displayimage ? (
          <img src={displayimage} alt="thumbnail" className="w-full h-full" />
        ) : (
          <div
            className="border-2 border-gray-500 flex items-center justify-center border-dashed rounded-lg p-4 mt-1"
            style={{ height: "38vh" }}
          >
            <p className="text-gray-500 w-5/12 text-center font-medium">
              Upload Thumbnail
            </p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={inputRef}
          onChange={onSelectFile}
        />
      </div>
      <div className="flex items-center justify-center py-3">
        <button
          className="flex items-center mx-2 text-gray-300  my-1 px-2 py-1 border border-gray-500
            hover:bg-darkBlack transition duration-200"
          type="button"
          style={{
            fontSize: "13px",
          }}
          onClick={triggerInput}
        >
          <HiUpload className="text-lightblue mr-1" />
          Upload
        </button>
        {displayimage && image && (
          <button
            className="flex items-center mx-2 text-gray-300  my-1 px-2 py-1 border border-gray-500
          hover:bg-darkBlack transition duration-200"
            type="button"
            style={{
              fontSize: "13px",
            }}
            onClick={() => {
              setOpenCrop(true);
            }}
          >
            <BiCrop className="text-lightblue mr-1" /> Crop
          </button>
        )}
      </div>
    </div>
  );
};

export default ThumbnailUpload;
