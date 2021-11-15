import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { useSelector } from "react-redux";
import { BsFacebook, BsPinterest, BsTwitter, BsLinkedin } from "react-icons/bs";

const SuccessfullArtworkCard = ({ thumbnailURL, createdArtworkId }) => {
  const user = useSelector((state) => state.user.value);

  React.useEffect(() => {
    // document.body.style.overflow = "hidden";
  }, []);
  return (
    <div className="w-full absolute top-0 flex justify-center h-screen bg-black z-40 bg-opacity-40">
      <div
        className="w-11/12 sm:w-8/12 md:w-5/12 lg:w-4/12 mt-10 bg-darkBlack flex flex-col rounded-md z-50"
        style={{ height: "65vh" }}
      >
        <div className="py-3 px-4 rounded-t-md bg-black3 flex items-center justify-between">
          <p className="text-gray-300  text-lg">
            Artwork Created. Publish to Social media.
          </p>
          <a
            href={`/u/${user.username}`}
            className="bg-darkBlack hover:bg-black px-2 py-1.5 border
         border-gray-500 text-white flex items-center"
            style={{ fontSize: "12px" }}
          >
            View Profile &nbsp; <FiExternalLink className="text-lightblue" />
          </a>
        </div>
        <div className="h-full">
          <img
            src={thumbnailURL}
            alt="new-thumbnail"
            className="w-full h-full"
          />
        </div>
        <div className="py-3 px-4 bg-black3 flex items-center ">
          <a
            href="http://pinterest.com"
            rel="noreferrer"
            className="text-white mx-1.5 flex justify-center items-center w-full text-center bg-red-700 py-1.5 rounded-sm"
            style={{ fontSize: "12px" }}
          >
            <BsPinterest className="text-white mr-2 text-base" /> Share
          </a>
          <a
            href="http://pinterest.com"
            rel="noreferrer"
            className="text-white mx-1.5 flex justify-center items-center w-full text-center bg-blue-800 py-1.5 rounded-sm"
            style={{ fontSize: "12px" }}
          >
            <BsFacebook className="text-white mr-2 text-base" /> Post
          </a>
          <a
            href="http://pinterest.com"
            rel="noreferrer"
            className="text-white mx-1.5 flex justify-center items-center w-full text-center bg-lightblue py-1.5 rounded-sm"
            style={{ fontSize: "12px" }}
          >
            <BsTwitter className="text-white mr-2 text-base" /> Tweet
          </a>
          <a
            href="http://pinterest.com"
            rel="noreferrer"
            className="text-white mx-1.5 flex justify-center items-center w-full text-center bg-blue-600 py-1.5 rounded-sm"
            style={{ fontSize: "12px" }}
          >
            <BsLinkedin className="text-white mr-2 text-base" /> Share
          </a>
        </div>
        <div className="pb-3 px-4 bg-black3 rounded-b-md flex items-center ">
          <a
            href={`http://localhost:3000/artwork/${createdArtworkId}`}
            rel="noreferrer"
            className="text-lightblue bg-darkBlack w-full px-3 py-2 text-sm"
          >
            {`http://localhost:3000/artwork/${createdArtworkId}`}
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessfullArtworkCard;
