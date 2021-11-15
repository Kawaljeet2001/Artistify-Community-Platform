import React from 'react'
import Textfield from "../../FormFields/Textfield";

const ArtworkTitle = ({register , errors , fieldname}) => {
    return (
        <div className="bg-black3 bg-opacity-40">
            <div className="font-light px-3 py-2 bg-black3 ">
              <p className="text-white">Artwork Title</p>
            </div>
            <div className="px-4 py-2 mt-2">
              <Textfield
                register={register}
                lable={false}
                placeholder={"What is your artwork called?"}
                errors={errors}
                fieldname={fieldname}
                errorMessage={"Error in creating Artwork!"}
              />
            </div>
          </div>
    )
}

export default ArtworkTitle
