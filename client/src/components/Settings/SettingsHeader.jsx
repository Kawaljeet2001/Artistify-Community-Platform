import React from "react";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { useSelector } from "react-redux";

const SettingsHeader = ({ data }) => {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="flex items-center bg-gray-400 bg-opacity-20 py-5 px-3.5 lg:px-8">
      <div className="w-9/12 lg:w-10/12">
        <h1 className="text-white text-3xl font-medium">
          {data === "/myartistify/edit/profile" ? "Profile" : "Social"}
        </h1>
        <p className="text-gray-400 mt-2 lg:mt-6 ">
          {data === "/myartistify/edit/profile"
            ? "Fill in your hiring information to appear in search results"
            : "Contact & social media links available publicly"}
        </p>
      </div>
      <Link
        to={`/u/${user.username}`}
        className="bg-darkBlack hover:bg-black px-1 lg:px-2 py-1.5 border
         border-gray-500 text-white flex items-center w-4/12 justify-center"
        style={{ fontSize: "12px" }}
      >
        View Profile &nbsp; <FiExternalLink className="text-lightblue" />
      </Link>
    </div>
  );
};

export default SettingsHeader;
