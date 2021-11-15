import React from "react";
import { BiErrorCircle } from "react-icons/bi";

const Textfield = ({ register, lable, errors, fieldname }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center ">
        <input
          type="checkbox"
          className="bg-darkBlack border-black3 px-3 text-gray-400 text-sm"
          style={{ outline: "none" }}
          {...register}
        />
        <p className="text-gray-300 ml-2">{lable}</p>
      </div>
      {errors[fieldname] && (
        <p className="text-red-500 font-medium mt-1 text-sm flex items-center">
          <BiErrorCircle className="mr-0.5" /> {errors[fieldname].message}
        </p>
      )}
    </div>
  );
};

export default Textfield;
