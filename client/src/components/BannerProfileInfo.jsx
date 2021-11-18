import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const BannerProfileInfo = ({ userDetails }) => {
  return (
    <div className="absolute flex items-center flex-col bottom-8 justify-center w-full z-20">
      <div className="rounded-full h-32 w-32 bg-gray-600 overflow-hidden">
        {userDetails && (
          <LazyLoadImage
            effect="blur"
            src={userDetails.avatarURL}
            alt={userDetails.username}
            height="full"
            width="full"
          />
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
