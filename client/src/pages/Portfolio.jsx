import React from "react";
import PortfolioBanner from "../components/PortfolioBanner";
import PublicHeader from "../components/PublicHeader";
const Portfolio = () => {
  return (
    <div className="">
      <PublicHeader />
      <div className="bg-darkBlack pt-20 flex flex-col items-center">
        <PortfolioBanner />
        <div className="bg-dark3 flex items-center bg-black w-full px-4 justify-center">
          <button className="bg-transparent text-white px-3 py-3">
            Portfolio
          </button>
          <button className="bg-transparent text-white px-3 py-3">About</button>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-0.5 w-full mt-8 h-full">
          <div className="bg-gray-400 w-full inset-0">
            <img
              src="https://cdnb.artstation.com/p/assets/images/images/041/245/175/20210908232325/smaller_square/kawaljeet-singh-batra-ren-2.jpg?1631161406"
              className="w-full object-cover object-center"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
