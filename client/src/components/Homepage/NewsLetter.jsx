import React from "react";

const backgroundImage =
  "https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/assets%2Fbg-newslttr.jpg?alt=media&token=4b7f1f6e-575c-4fd4-9804-e159dd3ad98f";

const NewsLetter = () => {
  const [backgroundSrc, setBackgroundSrc] = React.useState("logo192.png");
  React.useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setBackgroundSrc(backgroundImage);
  }, [backgroundImage]);

  return (
    <div
      className="w-full relative h-30v bg-center bg-no-repeat flex items-center justify-between px-16"
      style={{
        backgroundImage: `url(${backgroundSrc})`,
        boxShadow: "rgba(0,0,0,0.7) 0 0 0 1000px inset",
      }}
    >
      <div className="flex flex-col z-10 w-7/12">
        <h3 className="text-white text-3xl font-medium">Newsletter</h3>
        <p className="text-gray-300 w-9/12">
          Subscribe to the Artistify newsletter to get your weekly dose of news,
          updates, tips and special offers.
        </p>
      </div>
      <div className="w-5/12 flex z-10">
        <input
          type="text"
          placeholder="Email"
          className="h-full w-full p-3 bg-darkBlack border border-gray-600 text-gray-400"
          style={{ outline: "none" }}
        />
        <button className="bg-lightblue text-white p-3">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
