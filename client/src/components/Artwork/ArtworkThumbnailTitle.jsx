import React from "react";

const ArtworkThumbnailTitle = ({ userDetails, artworkDetails }) => {
  return (
    <div className="bg-gradient-to-t from-black group-hover:opacity-100 opacity-0 bg-opacity-75 absolute bottom-0 w-full px-3 pb-4 pt-24 hidden lg:flex transition duration-200">
      <div className="w-12 h-12 rounded-full bg-gray-500 items-center overflow-hidden">
        <img
          src={userDetails && userDetails.avatarURL}
          alt=""
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col items-start px-2 flex-1 ml-1">
        <p className="text-white font-light text-lg">
          {artworkDetails && artworkDetails.artworkTitle}
        </p>
        <p className="text-white text-sm font-medium mt-1">
          {userDetails &&
            (userDetails.fullname
              ? userDetails.fullname
              : userDetails.username)}
        </p>
      </div>
    </div>
  );
};

export default ArtworkThumbnailTitle;
