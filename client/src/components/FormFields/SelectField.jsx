import React from "react";
import { BiErrorCircle } from "react-icons/bi";

const SelectField = ({ register, errors, options, fieldname }) => {
  return (
    <>
      {options && (
        <div>
          <select
            {...register}
            className="px-2 py-2 h-full bg-darkBlack text-white w-full"
            style={{ fontSize: "12px", outline: "none" }}
          >
            {options.map((item, index) => (
              <option
                value={item}
                key={index}
                className="appearance:none p-20"
                style={{ fontSize: "12px" }}
              >
                {item}
              </option>
            ))}
          </select>
          {errors[fieldname] && (
            <p className="text-red-500 font-medium text-sm mt-1 flex items-center">
              <BiErrorCircle className="mr-0.5" /> {errors[fieldname].message}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default SelectField;
