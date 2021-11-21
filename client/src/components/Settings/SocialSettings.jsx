import axios from "axios";
import React from "react";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillBehanceSquare,
  AiFillFacebook,
} from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import SelectField from "../FormFields/SelectField";
import Textfield from "../FormFields/Textfield";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Icons = {
  Instagram: <AiFillInstagram className="text-gray-400 text-2xl mr-2" />,
  Facebook: <AiFillFacebook className="text-gray-400 text-2xl mr-2" />,
  Behance: <AiFillBehanceSquare className="text-gray-400 text-2xl mr-2" />,
  Youtube: <AiFillYoutube className="text-gray-400 text-2xl mr-2" />,
};

const SocialSettings = () => {
  const [socialHandles, setSocialHandles] = React.useState();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [options, setOptions] = React.useState();
  const [toggle, setToggle] = React.useState(false);
  const onSubmit = (data) => {
    setValue("socialFieldLink", "");
    updateSocials(data);
  };
  const getUserSocials = async () => {
    try {
      const res = await axios.get("/api/user/social", {
        withCredentials: true,
      });
      setSocialHandles(res.data);
      const originalArray = ["Instagram", "Facebook", "Youtube", "Behance"];
      let intersection = [];
      for (let i = 0; i < originalArray.length; i++) {
        if (
          res.data[originalArray[i]] === undefined ||
          res.data[originalArray[i]] === ""
        ) {
          intersection.push(originalArray[i]);
        }
      }
      setOptions(intersection);
    } catch (err) {
      console.log(err);
    }
  };

  const updateSocials = async (data) => {
    try {
      const res = await axios.patch("/api/user/social", data, {
        withCredentials: true,
      });
      if (res) {
        setToggle(!toggle);
        toast.success("Added social field successfully!");
      }
    } catch (err) {
      toast.error("Error in adding social field.");
      console.log(err);
    }
  };

  const deleteSocialMediaHandle = async (fieldname) => {
    let data = {
      socialField: fieldname,
      socialFieldLink: "",
    };
    console.log(data);
    try {
      const res = await axios.patch("/api/user/social", data, {
        withCredentials: true,
      });
      if (res) {
        setToggle(!toggle);
        toast.success("Deleted social field successfully!");
      }
    } catch (err) {
      toast.error("Error in deleting social field.");
      console.log(err);
    }
  };
  React.useEffect(() => {
    getUserSocials();
  }, [toggle]);
  return (
    <div
      className="bg-gray-500 bg-opacity-10 py-6 px-2 lg:px-8 flex flex-col"
      style={{ minHeight: "60vh" }}
    >
      <ToastContainer
        hideProgressBar
        autoClose={3000}
        theme="colored"
        bodyClassName="font-bold text-sm"
      />
      {socialHandles
        ? Object.keys(socialHandles).map(
            (item, index) =>
              socialHandles[item] && (
                <div
                  className="flex items-center justify-between border-b border-gray-700 py-3"
                  key={index}
                >
                  <div className="flex items-center">
                    {Icons[item]}
                    <a
                      className="text-lightblue"
                      target="_blank"
                      rel="noreferrer"
                      href={socialHandles[item]}
                    >
                      {socialHandles[item]}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MdDelete
                      className="text-lightblue text-xl cursor-pointer"
                      onClick={() => deleteSocialMediaHandle(item)}
                    />
                  </div>
                </div>
              )
          )
        : null}
      {options && options.length > 0 ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-8 grid grid-cols-8 w-full gap-2 mt-6"
        >
          <div className="col-span-2">
            <SelectField
              register={register("socialField")}
              errors={errors}
              fieldname={"socialField"}
              options={options}
            />
          </div>
          <div className="col-span-5">
            <Textfield
              register={register("socialFieldLink", {
                required: "This field cannot be empty!",
              })}
              errors={errors}
              fieldname={"socialFieldLink"}
            />
          </div>
          <div className="col-span-1">
            <button
              type="submit"
              className="bg-green-400 hover:bg-green-600 text-white px-2 py-2 rounded-sm text-sm w-full"
            >
              Add
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default SocialSettings;
