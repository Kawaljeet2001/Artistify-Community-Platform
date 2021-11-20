import React from "react";
import BannerProfileInfo from "./BannerProfileInfo";
import { ImCross } from "react-icons/im";
import { HiUpload } from "react-icons/hi";
import { useSelector } from "react-redux";
import { storage } from "../firebaseConfig";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PortfolioBanner = ({ userDetails }) => {
  const user = useSelector((state) => state.user.value);
  const [bannerImage, setBannerImage] = React.useState(null);
  const [isUploading, setIsUploading] = React.useState(false);
  const [isRemoving, setIsRemoving] = React.useState(false);
  const [newlyUploadedBanner, setNewlyUploadedBanner] = React.useState(false);

  const uploadNewProfileBanner = () => {
    const fileelem = document.getElementById("profilebannerupload");
    fileelem.click();
  };

  const uploadBanner = async (imageData) => {
    try {
      const bannerStorageRef = ref(storage, `banner/${user.username}`);
      const res = await uploadBytes(bannerStorageRef, imageData);
      if (res) {
        const newBannerURL = await getDownloadURL(bannerStorageRef);
        if (newBannerURL) {
          const data = {};
          data["bannerImage"] = newBannerURL;
          const res = await axios.patch("/api/user/update", data, {
            withCredentials: true,
          });
          if (res) {
            setIsUploading(!isUploading);
            toast.success("Background updated successfully!");
            setNewlyUploadedBanner(newBannerURL);
          }
          console.log(res.data);
        }
      }
    } catch (err) {
      toast.error("Error in updating background. Try Again!");
      console.log(err);
    }
  };

  const deleteBanner = async () => {
    try {
      const defaultURL =
        "https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/banner%2Fdefault.jpg?alt=media&token=1b7f9947-44e0-4b7a-91f2-432a479b8ec0";

      if (!newlyUploadedBanner && defaultURL === userDetails.bannerImage) {
        toast.error("Background already removed!");
        return;
      }
      setIsRemoving(!isRemoving);
      let deleteBannerStorageRef;
      if (newlyUploadedBanner)
        deleteBannerStorageRef = ref(storage, newlyUploadedBanner);
      else {
        deleteBannerStorageRef = ref(storage, userDetails.bannerImage);
      }
      const res = await deleteObject(deleteBannerStorageRef);
      console.log(res);

      //also send a request to update the db
      const dbres = await axios.patch(
        "/api/user/update",
        { bannerImage: defaultURL },
        {
          withCredentials: true,
        }
      );
      if (dbres) {
        setNewlyUploadedBanner(defaultURL);
        setIsRemoving(false);
        toast.success("Background removed successfully!");
        window.location.reload();
      }
      console.log(dbres.data);
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    if (bannerImage) {
      uploadBanner(bannerImage);
    }
  }, [bannerImage]);
  return (
    <div className="bg-darkBlack w-full h-60v relative overflow-hidden flex items-center">
      <ToastContainer
        hideProgressBar
        autoClose={3000}
        theme="colored"
        bodyClassName="font-bold text-sm"
      />
      <input
        type="file"
        className="hidden"
        id="profilebannerupload"
        onChange={(e) => {
          setIsUploading(!isUploading);
          if (e.target.files) setBannerImage(e.target.files[0]);
        }}
      />
      <BannerProfileInfo userDetails={userDetails} />
      {user && userDetails && user.username === userDetails.username && (
        <div className="absolute right-10 top-10 z-20 flex items-end flex-col">
          <button
            className="flex items-center text-white bg-darkBlack my-1 px-2 py-1 border border-gray-500 opacity-60 hover:opacity-100 transition duration-200"
            style={{ fontSize: "12px" }}
            type="button"
            onClick={uploadNewProfileBanner}
            disabled={isUploading}
          >
            <HiUpload className="font-bold text-base text-lightblue" /> &nbsp;
            {!isUploading
              ? userDetails && userDetails.bannerImage
                ? "Change Background (1920x640+)"
                : "Add (1920x640+)"
              : "Uploading..."}
          </button>
          {userDetails && userDetails.bannerImage && (
            <button
              className="flex items-center text-white bg-darkBlack my-1 px-2 py-1 border border-gray-500 opacity-60 hover:opacity-100 transition duration-200"
              style={{ fontSize: "12px" }}
              type="button"
              onClick={deleteBanner}
              disabled={isRemoving}
            >
              <ImCross className="text-vsm text-lightblue" /> &nbsp;{" "}
              {isRemoving ? "Removing..." : "Remove Background"}
            </button>
          )}
        </div>
      )}
      {userDetails && userDetails.bannerImage && (
        <>
          <div className="z-10 bg-gradient-to-t from-black w-full h-30v absolute bottom-0"></div>
          {newlyUploadedBanner ? (
            <LazyLoadImage
              effect="blur"
              src={newlyUploadedBanner}
              alt={user.username + " banner"}
              height="full"
              width="full"
            />
          ) : (
            <LazyLoadImage
              effect="blur"
              src={userDetails.bannerImage}
              alt={userDetails.username}
              height="full"
              width="full"
            />
          )}
        </>
      )}
    </div>
  );
};

export default PortfolioBanner;
