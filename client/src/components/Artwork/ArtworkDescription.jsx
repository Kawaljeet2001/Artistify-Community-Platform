import React from "react";

const ArtworkDescription = ({data}) => {
  return (
    <div className="flex items-center flex-col w-full">
      <h1 className="text-white font-bold text-4xl w-4/12 text-center">
        {data.artworkTitle}
      </h1>
      <p className="text-gray-400 w-7/12 mt-24 font-medium text-lg whitespace-pre-wrap" >
        {/* Hey Guys!!
        <br />
        <br /> This is Game-Ready fully textured Green Goblin Pumpkin Boomerang
        asset I made and textured in Blender. <br />
        This same grenade asset is used by Harry Osborn's Green goblin in the
        original Sam Rami's Spiderman 3. <br />
        <br />
        You can buy this same asset here: https://bit.ly/38F49D8 Thanks for
        viewing !! */}
        {data.description}
      </p>
    </div>
  );
};

export default ArtworkDescription;
