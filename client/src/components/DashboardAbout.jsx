import React from "react";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillBehanceSquare,
  AiFillFacebook,
} from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Icons = {
  Instagram: (
    <AiFillInstagram className="text-white text-3xl mx-3 cursor-pointer hover:text-lightblue transition duration-200" />
  ),
  Facebook: (
    <AiFillFacebook className="text-white text-3xl mx-3 cursor-pointer hover:text-lightblue transition duration-200" />
  ),
  Behance: (
    <AiFillBehanceSquare className="text-white text-3xl mx-3 cursor-pointer hover:text-lightblue transition duration-200" />
  ),
  Youtube: (
    <AiFillYoutube className="text-white text-3xl mx-3 cursor-pointer hover:text-lightblue transition duration-200" />
  ),
};

const DashboardAbout = ({ userDetails }) => {
  return (
    <div
      style={{ minHeight: "50vh" }}
      className="flex flex-col items-center py-8"
    >
      <Link
        to="/myartistify/edit/profile"
        className="flex items-center text-white bg-gray-800 rounded-sm hover:bg-darkBlack my-1 px-2 py-1 border border-gray-500"
        style={{ fontSize: "12px" }}
      >
        <RiEdit2Fill className="text-lightblue text-base mr-1.5" />
        Edit Profile
      </Link>
      <p className="text-white text-2xl font-light mt-10">Summary</p>
      <p className="text-gray-400 mt-3">
        {userDetails && userDetails.professionalHeadline}
      </p>
      <div className="flex items-center mt-8">
        {userDetails
          ? Object.keys(userDetails.socialMediaHandles).map(
              (item, index) =>
                userDetails.socialMediaHandles[item] && (
                  <a
                    href={userDetails.socialMediaHandles[item]}
                    target="_blank"
                    rel="noreferrer"
                    key={index}
                  >
                    {Icons[item]}
                  </a>
                )
            )
          : null}
      </div>

      <div className="mt-20 flex flex-col items-center">
        <p className="text-white text-2xl font-light">Skills</p>
        <div className="flex items-center mt-4">
          {userDetails &&
            userDetails.skills.map((item, index) => (
              <div
                key={index}
                className="text-lightblue border border-lightblue px-2.5 py-1 text-sm rounded-sm mx-2"
              >
                <p style={{ fontSize: "12px" }}>{item}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center">
        <p className="text-white text-2xl font-light">Software</p>
        <div className="flex items-center mt-4 flex-wrap justify-center lg:justify-start">
          {userDetails &&
            userDetails.software.map((item, index) => {
              return (
                <div
                  key={index}
                  className="text-lightblue border border-lightblue px-2.5 py-1 text-sm my-2 lg:my-0 rounded-sm mx-2"
                >
                  <p style={{ fontSize: "12px" }}>{item}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default DashboardAbout;
