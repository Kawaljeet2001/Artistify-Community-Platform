import React from "react";
import { Link } from "react-router-dom";

const ArtworkDescription = ({ data }) => {
  return (
    <div className="flex items-center flex-col w-full">
      <h1 className="text-white font-bold text-4xl w-4/12 text-center">
        {data.data.artworkTitle}
      </h1>
      <Link
        to={`/u/${data.user.username}`}
        className="text-lightblue mt-2 text-lg hover:opacity-80 transition duration-200"
      >
        by - {data.user.fullname ? data.user.fullname : data.user.username}
      </Link>
      <p className="text-gray-400 w-7/12 mt-24 font-medium text-lg whitespace-pre-wrap">
        {data.data.description}
      </p>
    </div>
  );
};

export default ArtworkDescription;
