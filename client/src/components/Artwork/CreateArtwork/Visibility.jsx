import React from "react";
import CheckboxField from "../..//FormFields/CheckboxField";

const Visibility = ({ register1 , register2, errors, fieldname1, fieldname2 }) => {
  return (
    <div className="bg-black3 bg-opacity-40 row-span-1 mt-8">
      <div className="font-light px-3 py-2 bg-black3 ">
        <p className="text-white">Visibility on Portfolio Lists</p>
      </div>
      <div className="p-5 flex flex-col">
        <p className="text-gray-400 w-11/12  font-medium mb-6">
          Where do you want this Artwork to show?
        </p>
        <CheckboxField
          lable={"Artisitify.com"}
          register={register1}
          errors={errors}
          fieldname={fieldname1}
        />
        <CheckboxField
          lable={"My Portfolio"}
          register={register2}
          errors={errors}
          fieldname={fieldname2}
        />
        <p className="text-sm text-gray-500">
          People with the link to the project will still be able to view it.
        </p>
      </div>
    </div>
  );
};

export default Visibility;
