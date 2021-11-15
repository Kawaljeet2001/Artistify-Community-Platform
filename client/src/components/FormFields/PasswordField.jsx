import React from "react";
import { BiErrorCircle } from "react-icons/bi";
const Textfield = ({ register, lable, errors, fieldname }) => {
  return (
    <div className="flex flex-col mb-6">
      <p className="text-gray-300">* {lable}</p>
      <input
        type="password"
        className="bg-darkBlack border-black3 mt-2 px-3 py-2 text-gray-400 text-sm"
        style={{ outline: "none" }}
        {...register}
      />
      {errors[fieldname] ? (
        errors[fieldname].type === "validate" ? (
          <p className="text-red-500 font-medium text-sm mt-1 flex items-center">
            <BiErrorCircle className="mr-0.5" /> Password and Confirm Password do not match!
          </p>
        ) : (
          <p className="text-red-500 font-medium text-sm mt-1 flex items-center">
            <BiErrorCircle className="mr-0.5" /> {errors[fieldname].message}
          </p>
        )
      ) : null}
    </div>
  );
};

export default Textfield;
