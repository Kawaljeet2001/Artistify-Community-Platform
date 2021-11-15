import React from "react";
import youtubeLogo from "../../images/youtubelogo.png";
import githublogo from "../../images/githublogo.png";
import { TiTick } from "react-icons/ti";
const image2URL =
  "https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/assets%2Fgetstarted.png?alt=media&token=23b25a9e-62e2-4eb5-913a-600387dcb486";
const cardItems = ["Online portfolio", "Artist Profiles", "Collections"];
const image1URL =
  "https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/assets%2Fviewimage.png?alt=media&token=b499cab5-9e01-42cd-bdee-8864a246d673";
const ViewAppBanner = () => {
  const [image2Src, setimage2Src] = React.useState("logo192.png");
  const [image1Src, setImage1Src] = React.useState("logo192.png");

  React.useEffect(() => {
    const img = new Image();
    img.src = image2URL;
    img.onload = () => setimage2Src(image2URL);
  }, [image2URL]);

  React.useEffect(() => {
    const img = new Image();
    img.src = image1URL;
    img.onload = () => setImage1Src(image1URL);
  }, [image1URL]);

  return (
    <>
      <div className="py-12 flex items-center justify-center relative  ">
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-white opacity-10 z-10"></div>
        <div className="w-9/12 flex items-center z-20">
          <img alt="github" src={image1Src} className="w-5/12" />
          <div className="w-7/12 pl-8">
            <h1 className="text-white text-4xl font-medium">
              Know the Artistify Platform
            </h1>
            <p className="text-gray-400 mt-4" style={{ fontSize: "14px" }}>
              The Artistify Community Platform provides an awesome browsing and
              discovery experience, enabling you to view thousands of artworks
              by the world's best artists.
            </p>
            <div className="flex items-center mt-6">
              {cardItems.map((item, index) => (
                <div key={index} className="flex items-center mr-8">
                  <TiTick className="text-green-500 text-xl bg-gray-500 bg-opacity-30 rounded-full mr-2" />
                  <p className="text-white font-medium text-lg ">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center">
              <a
                href="http://google.com"
                rel="noreferrer"
                className="text-white mr-6 bg-gray-500 hover:bg-gray-400 bg-opacity-30 flex items-center justify-center p-2 rounded-xl w-40"
              >
                <img src={youtubeLogo} alt="youtube" className="w-10 mr-3" />
                <div className="flex flex-col">
                  <p className="text-white" style={{ fontSize: "10px" }}>
                    See Demo on
                  </p>
                  <p className="text-white text-lg font-medium">Youtube</p>
                </div>
              </a>
              <a
                href="/"
                rel="noreferrer"
                className="text-white bg-gray-500 hover:bg-gray-400 bg-opacity-30 flex items-center justify-center p-2 rounded-xl w-40 "
              >
                <img src={githublogo} alt="youtube" className="w-10 mr-3" />
                <div className="flex flex-col">
                  <p className="text-white" style={{ fontSize: "10px" }}>
                    Get the code on
                  </p>
                  <p className="text-white text-lg font-medium">Github</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-darkBlack pt-8 pb-16 w-full flex items-center justify-center">
        <div className="w-6/12 flex justify-end items-center overflow-hidden rounded-lg px-4">
          <img
            src={image2Src}
            alt="get-started"
            className="w-9/12 rounded-lg"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
            }}
          />
        </div>
        <div className="flex flex-col w-6/12 px-6">
          <h3 className="text-white text-3xl">
            Get inspired with every new artwork
          </h3>
          <p className="text-gray-400 mt-4" style={{ fontSize: "15px" }}>
            Artistify enables art lovers to discover amazing artworks, by being
            right in their browsers.
            <br />
            Simply visit the platform and it will load random picks from
            Artistify.com.
          </p>
          <button className="bg-gray-500 bg-opacity-10 border border-gray-700 mt-4 p-3 rounded-md text-gray-400 w-44">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewAppBanner;
