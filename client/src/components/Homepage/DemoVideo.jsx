import React from "react";

const DemoVideo = () => {
  return (
    <div className="bg-darkBlack py-6 px-10 flex flex-col-reverse lg:flex-row mb-8 lg:mb-0 justify-center items-center text-white h-full lg:h-70v">
      <div
        className="w-full lg:w-5/12 flex items-center justify-end mt-6 lg:mt-0 lg:relative overflow-hidden lg:h-4/6 rounded-lg"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/E302nz_ihtA"
          title="Artistify Community Platform Demo Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="lg:absolute lg:top-0 lg:left-0 h-full w-full"
        ></iframe>
      </div>
      <div className="text-white flex flex-col w-full lg:w-5/12 lg:pl-12">
        <p className="text-lightblue font-medium text-center lg:text-left">
          VIEW DEMO
        </p>
        <h3 className="text-4xl font-medium mt-1 text-center lg:text-left">
          See what Artistify is all about
        </h3>
        <p className="text-gray-300 mt-2 text-center lg:text-left">
          Take a look at the demo presentation to get aquainted with basic
          features of the platform and kickstrt your journey with Artistify.
        </p>
      </div>
    </div>
  );
};

export default DemoVideo;
