import React from "react";
import { Link } from "react-router-dom";
import { IoSendSharp } from "react-icons/io5";
import { RiPencilRulerFill } from "react-icons/ri";
import { HiUpload } from "react-icons/hi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSelector } from "react-redux";
import NavbarMenu from "./NavbarMenu";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Navbar = () => {
  const user = useSelector((state) => state.user.value);
  const [toggleMenu, setToggleMenu] = React.useState(false);

  function menuController() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <div className="w-full sticky top-0 z-30 bg-black py-4 flex items-center justify-between px-6">
      <a href="/" rel="noreferrer" className="text-white text-lg font-medium">
        ARTISTIFY
      </a>
      {user ? (
        <div className="flex items-center">
          <Link
            to="/projects/new"
            rel="noopener noreferrer"
            className="group flex items-center text-white font-medium text-sm mx-5"
          >
            <HiUpload className="mr-1 text-lg font-medium group-hover:text-lightblue transition duration-200" />{" "}
            UPLOAD
          </Link>
          <div
            className="flex items-center cursor-pointer relative"
            onClick={menuController}
          >
            <div className="w-9 h-9 rounded-full bg-gray-500 ml-3 overflow-hidden flex items-center">
              {user && (
                <LazyLoadImage
                  effect="blur"
                  src={user.avatarURL}
                  alt={user.username}
                  height="full"
                  width="full"
                />
              )}
            </div>
            <MdKeyboardArrowDown className="text-white font-bold ml-1 text-xl mr-3" />
            {toggleMenu && <NavbarMenu />}
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <Link
            to="/signup"
            className="flex mx-3 font-medium text-sm items-center text-white "
          >
            <RiPencilRulerFill className="mr-1 font-bold text-lg" /> SIGN UP
          </Link>
          <Link
            to="/signin"
            className="text-white flex items-center mx-3 font-medium bg-lightblue px-3.5 py-2 rounded-sm text-sm"
          >
            <IoSendSharp className="text-white mr-1 font-bold text-lg" />
            SIGN IN
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
