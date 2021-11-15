import React from "react";

const PublishingOptions = () => {
  return (
    <div className="bg-black3 bg-opacity-40 row-span-1 mt-8">
      <div className="font-light px-3 py-2 bg-black3 ">
        <p className="text-white">Publishing Options</p>
      </div>
      <div className="p-5 flex flex-col">
        <p className="text-gray-400 w-11/12  font-medium mb-6">
          Publish Status
        </p>

        {/* <button
          type="Submit"
          className="text-white bg-lightblue py-2 my-1 px-3 w-full rounded-sm"
        >
          Save
        </button> */}
        <button
          type="Submit"
          className="text-white bg-green-500 py-2 my-1 px-3 w-full rounded-sm"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default PublishingOptions;
