import React from "react";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ArtworkImages = ({ images, scrollPosition }) => {
  return (
    <div className="flex items-center flex-col h-full w-9/12 mt-16">
      {images.map((item, index) => (
        <div
          key={index}
          className="w-full h-70v flex items-center justify-center my-4 bg-black"
        >
          <LazyLoadImage
            effect="blur"
            src={item}
            alt="artwork-detail"
            style={{
              maxHeight: "70vh",
            }}
            height = "full"
            scrollPosition={scrollPosition}
          />
        </div>
      ))}
    </div>
  );
};

export default trackWindowScroll(ArtworkImages);
