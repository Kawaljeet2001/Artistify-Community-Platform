import React from 'react'
import TextAreaField from "../..//FormFields/TextAreaField";

const ArtworkDescription = ({register , errors , fieldname}) => {
    return (
        <div className="bg-black3 bg-opacity-40 row-span-1 mt-8">
        <div className="font-light px-3 py-2 bg-black3 ">
          <p className="text-white">Artwork Description</p>
        </div>
        <div className="px-4 py-2 mt-2">
          <TextAreaField
            register={register}
            lable={false}
            placeholder={"Artwork Description"}
            errors={errors}
            fieldname={fieldname}
            errorMessage={"Error creating Artwork!"}
          />
        </div>
      </div>
    )
}

export default ArtworkDescription
