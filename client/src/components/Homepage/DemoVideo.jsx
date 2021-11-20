import React from "react";

const DemoVideo = () => {
  return (
    <div className="bg-darkBlack py-6 px-10 flex justify-center items-center text-white h-70v">
      <div
        className="w-5/12 flex items-center justify-end relative overflow-hidden h-4/6 rounded-lg"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/vKiHCaA7hCY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="absolute top-0 left-0 h-full w-full"
        ></iframe>
      </div>
      <div className="text-white flex flex-col w-5/12 pl-12">
        <p className="text-lightblue font-medium">VIEW DEMO</p>
        <h3 className="text-4xl font-medium mt-1">
          See what Artistify is all about
        </h3>
        <p className="text-gray-300 mt-2">
          Take a look at the demo presentation to get aquainted with basic
          features of the platform and kickstrt your journey with Artistify.
        </p>
      </div>
    </div>
  );
};

export default DemoVideo;