import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage, trackWindowScroll  } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const DisplayArtworkCard = ({ item, index, scrollPosition }) => {
  return (
    <Link
      className={
        index === 3 || index === 21 || index === 31
          ? "group col-span-2 relative row-span-2 overflow-hidden flex items-center justify-center"
          : "group overflow-hidden relative flex items-center justify-center"
      }
      to={`/artwork/${item.linkId}`}
      key={index}
    >
      <div className="group-hover:opacity-70 opacity-0 bg-gradient-to-t from-black absolute bottom-0 w-full h-3/6 transition duration-200"></div>
      <LazyLoadImage
        effect="blur"
        src={item.thumbnailURL}
        alt="this is alternate image name"
        height="full"
        width="full"
        scrollPosition = {scrollPosition}
      />
    </Link>
  );
};

export default trackWindowScroll(DisplayArtworkCard);
