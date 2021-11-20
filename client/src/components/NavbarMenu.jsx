import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineProfile,
  AiOutlineEdit,
  AiOutlineFileDone,
} from "react-icons/ai";
import axios from "axios";
import { useDispatch , useSelector} from "react-redux";
import { setUserLogin } from "../Redux/Slices/userSlice";
// import { Redirect } from "react-router";



const NavbarMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  

  const LinkItems = [
    {
      title: "View Profile",
      to: `/u/${user && user.username}`,
      icon: <AiOutlineProfile className="mr-1.5" />,
    },
    {
      title: "Edit Profile",
      to: "/myartistify/edit/profile",
      icon: <AiOutlineEdit className="mr-1.5" />,
    },
    {
      title: "View Portfolio",
      to: `/portfolio/${user && user.username}`,
      icon: <AiOutlineFileDone className="mr-1.5" />,
    },
  ];


  const logoutUser = async () => {
    try {
      const res = await axios.post(
        "/api/auth/logout",
        {},
        { withCredentials: true }
      );
      dispatch(setUserLogin(false));
      console.log(res.data);
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="absolute flex flex-col items-center rounded-sm py-3  right-0 top-12 w-60"
      style={{ background: "#333", zIndex : "60" }}
    >
      <div className="w-full">
        {LinkItems.map((item, index) => (
          <Link
            key={index}
            className="group w-full px-4 relative py-3 flex items-center justify-start font-light text-gray-300 hover:bg-darkBlack hover:text-white hover:font-medium transition duration-200"
            to={item.to}
          >
            {item.icon}
            {item.title}
            <div className="absolute left-0 w-1  h-full group-hover:bg-lightblue transition duration-200"></div>
          </Link>
        ))}
      </div>
      <div className="w-full px-5 mt-10">
        <button
          className="bg-darkBlack border border-gray-500 px-5 p-2 rounded-md text-gray-300 w-full hover:text-lightblue transition duration-200"
          onClick={logoutUser}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default NavbarMenu;
