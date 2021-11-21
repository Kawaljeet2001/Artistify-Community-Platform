import React from "react";
import CardComponent from "./CardComponent";
import { BiInfinite } from "react-icons/bi";
import { MdWebAsset } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const cardData = [
  {
    title: "Join Today",
    options: [
      {
        icon: <BiInfinite className="text-lightblue text-4xl" />,
        heading: "Unlimited Learning",
        desc: "Unlimited Learning from Industry Experts and Community members.",
      },
      {
        icon: <MdWebAsset className="text-lightblue text-4xl" />,
        heading: "Online Portfolio",
        desc: "Setup your web presence! with Beautiful themes, domain names and much more.",
      },
      {
        icon: <AiOutlineUsergroupAdd className="text-lightblue text-4xl" />,
        heading: "More Visibility",
        desc: "Appear ar the top of the Searches and don't let recruiters miss your profile.",
      },
    ],
    button: "Get Started",
    to: "/signin",
  },
  {
    title: "Member Features",
    options: [
      {
        icon: <BiInfinite className="text-lightblue text-4xl" />,
        heading: "Create Artworks",
        desc: "Create and share details of your projects with the community.",
      },
      {
        icon: <MdWebAsset className="text-lightblue text-4xl" />,
        heading: "Personlized Profile",
        desc: "Get a personlized user experience whilst visiting through your dashboard.",
      },
      {
        icon: <AiOutlineUsergroupAdd className="text-lightblue text-4xl" />,
        heading: "Total Control",
        desc: "Achieve total control of your online brand. Connect your social links and let others know about your profile.",
      },
    ],
    button: "Create Account",
    to: "/signup",
  },
];

const backgroundImage =
  "https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/assets%2Fsubscribecardbg.jpg?alt=media&token=2343b884-1599-4a86-94ef-ffdc4870c930";

const SubscribeCards = () => {
  const [backgroundSrc, setBackgroundSrc] = React.useState("logo192.png");
  React.useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setBackgroundSrc(backgroundImage);
  }, [backgroundImage]);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundSrc})`,
        boxShadow: "rgba(0,0,0,0.5) 0 0 0 1000px inset",
      }}
      className="w-full flex-col lg:flex-row flex items-center h-full lg:h-80v py-16 px-4 lg:px-12 bg-cover lg:bg-center bg-no-repeat relative"
    >
      <div className="text-white flex flex-col w-11/12 lg:w-5/12">
        <p className="text-lightblue font-medium text-center lg:text-left">SUBSCRIBE</p>
        <h3 className="text-4xl font-medium mt-1 text-center lg:text-left">
          Take your Art to the Next Level
        </h3>
        <p className="text-gray-300 mt-2 text-center lg:text-left">
          With Artistify, get everything you need to help grow your brand, build
          your presence and advance your career as an artist.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center w-11/12 lg:w-7/12">
        {cardData.map((item, index) => (
          <CardComponent key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SubscribeCards;
