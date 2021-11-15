import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoShareSocialOutline } from "react-icons/io5";

const SettingsMenu = ({ url }) => {
  return (
    <div className="col-span-3">
      <div className="flex flex-col w-full">
        <NavLink
          to={`${url}/profile`}
          activeClassName="relative rounded-sm my-1 group py-3 px-5 text-white flex items-center bg-black bg-opacity-60 hover:text-white transition duration-200"
          className="relative rounded-sm my-1 group py-3 px-5 bg-transparent text-gray-400 flex items-center hover:bg-black hover:bg-opacity-60 hover:text-white transition duration-200"
        >
          <div className="rounded-l-sm absolute w-1 bg-transparent left-0 h-full transition duration-200"></div>
          <CgProfile className="text-lightblue transition duration-100" />
          &nbsp;&nbsp;Profile
        </NavLink>

        <NavLink
          to={`${url}/social`}
          activeClassName="relative rounded-sm my-1 group py-3 px-5 text-white flex items-center bg-black bg-opacity-60 hover:text-white transition duration-200"
          className="relative rounded-sm my-1 group py-3 px-5 bg-transparent text-gray-400 flex items-center hover:bg-black hover:bg-opacity-60 hover:text-white transition duration-200"
        >
          <div className="rounded-l-sm absolute w-1 bg-transparent left-0 h-full transition duration-200"></div>
          <IoShareSocialOutline className="text-lightblue transition duration-100" />
          &nbsp;&nbsp;Social
        </NavLink>
      </div>
    </div>
  );
};

export default SettingsMenu;
