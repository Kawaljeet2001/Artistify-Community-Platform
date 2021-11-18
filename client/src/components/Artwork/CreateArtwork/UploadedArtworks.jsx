import React from "react";
import { ref, deleteObject } from "firebase/storage";
import { storage } from "../../../firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageDisplay from "./ImageDisplay";

const UploadedArtworks = ({
  artworkId,
  data,
  updateUploadedImages,
}) => {
  const deleteImage = async (imageName, index) => {
    try {
      const deleteRef = ref(storage, `/artwork/${artworkId}/${imageName}`);
      await deleteObject(deleteRef);
      toast.success("Artwork deleted.");
      //update the current uploaded images state
      const existing = data;
      existing.splice(index, 1);
      updateUploadedImages(existing);
      setToggle(!toggle);
      //remove the one with index
    } catch (err) {
      console.log(err);
    }
  };
  const [toggle, setToggle] = React.useState(false);
  return (
    <>
      <ToastContainer
        hideProgressBar
        autoClose={1500}
        theme="colored"
        bodyClassName="font-bold text-sm"
      />
      <div className="grid grid-cols-3 gap-6 mt-8">
        {data.map((item, index) => (
          <ImageDisplay
            index={index}
            key={index}
            item={item}
            deleteImage={(imagename , index) => deleteImage(imagename , index)}
          />
        ))}
      </div>
    </>
  );
};

export default UploadedArtworks;
