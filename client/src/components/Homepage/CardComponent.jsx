import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ data }) => {
  return (
    <Link
      to={data.to}
      className="text-white rounded-xl bg-darkBlack block pt-3 z-10 my-3 lg:my-0 w-full lg:w-5/12 mx-8"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      }}
    >
      <div className="px-3 py-5 flex flex-col items-center">
        <h1 className="text-white text-2xl bg-gray-800 px-4 py-2.5 rounded-md">
          {data.title}
        </h1>
        <div className="flex flex-col px-4 mt-3 items-center">
          {data.options.map((item, index) => (
            <div className="flex items-center my-5" key={index}>
              <div className="rounded-full p-3 bg-gray-600 bg-opacity-40 mr-5">
                {item.icon}
              </div>
              <div>
                <h3 className="text-white font-medium">{item.heading}</h3>
                <p className="text-gray-400" style={{ fontSize: "12px" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          <p className="text-gray-400 w-7/12 pl-4 ">and more ...</p>
        </div>
      </div>
      <div className="bg-lightblue px-3 py-3.5 rounded-b-xl text-white font-medium text-lg text-center">
        {data.button}
      </div>
    </Link>
  );
};

export default CardComponent;
