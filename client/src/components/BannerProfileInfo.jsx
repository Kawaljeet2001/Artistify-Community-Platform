import React from "react";

const BannerProfileInfo = ({ userDetails }) => {
  return (
    <div className="absolute flex items-center flex-col bottom-8 justify-center w-full z-10">
      <div className="rounded-full h-32 w-32 bg-gray-600 overflow-hidden">
        {userDetails && (
          <img src={userDetails.avatarURL} alt="" className="w-full h-full" />
        )}
      </div>
      <h2 className="text-white text-center mt-4 text-3xl font-medium">
        {userDetails &&
          (userDetails.fullname ? userDetails.fullname : userDetails.username)}
      </h2>
      <p className="text-gray-400 mt-2 text-center">
        {userDetails && userDetails.description}
      </p>
    </div>
  );
};

export default BannerProfileInfo;
