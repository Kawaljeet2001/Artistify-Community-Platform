import React from "react";
import { HiUpload } from "react-icons/hi";
import { storage } from "../../../firebaseConfig";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const ImageUploadSection = ({
  artworkId,
  setUploadedImages,
}) => {
  const inputRef = React.useRef(null);
  const [images, setImages] = React.useState([]);
  const [isUploading , setIsUploading] = React.useState(false);

  const handleUpload = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      if (e.target.files[i]) {
        const imageFile = e.target.files[i];
        const imageName = `image${JSON.stringify(new Date())}${Math.random()*7873489}`;
        uploadImages(imageFile, imageName);
        setImages((prevState) => [...prevState, e.target.files[i]]);
      }
    }
    setIsUploading(false);
  };

  const uploadImages = async (image, name) => {
    const artworkUploadRef = ref(storage, `artwork/${artworkId}/${name}`);
    const uploadTask = uploadBytesResumable(artworkUploadRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUploadedImages({ imageURL: downloadURL, imageName: name });
        });
      }
    );

  };
  return (
    <>
      <div className="py-6 flex h-56 items-center justify-center border-2 border-dashed border-gray-500 rounded-sm mt-8">
        <input
          type="file"
          multiple
          className="hidden"
          onChange={handleUpload}
          ref={inputRef}
        />
        <button
          className="flex justify-center text-lg items-center rounded-sm mt-4 w-52 text-white bg-darkBlack hover:bg-gray-900 my-1 px-2 py-1 border border-gray-500"
          style={{ fontSize: "13px" }}
          type="button"
          onClick={() => {
            inputRef.current.click();
            setIsUploading(true);

          }}
          disabled = {isUploading}
        >
          <HiUpload className="text-lightblue mr-1" />
          {isUploading ? "Uploading..." : "Upload media files"}
        </button>
      </div>
    </>
  );
};

export default ImageUploadSection;
