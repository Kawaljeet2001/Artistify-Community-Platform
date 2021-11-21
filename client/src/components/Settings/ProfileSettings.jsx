import React from "react";
import Textfield from "../FormFields/Textfield";
import { useForm } from "react-hook-form";
import { AiOutlineSave } from "react-icons/ai";
import { useSelector } from "react-redux";
import axios from "axios";
import { storage } from "../../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProfileSettings = () => {
  const user = useSelector((state) => state.user.value);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const avatarFile = data.avatar[0];
    console.log(data);
    let updateObj = {
      city: data.city,
      country: data.country,
      fullname: data.fullname,
      professionalHeadline: data.professionalHeadline,
    };
    if (avatarFile) {
      uploadAvatar(updateObj, avatarFile);
    } else {
      updateProfileDetails(updateObj);
    }
  };

  const updateProfileDetails = async (data) => {
    try {
      const res = await axios.patch("/api/user/update", data, {
        withCredentials: true,
      });
      if (res) {
        toast.success("Successfully updated profile details.");
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };

  const uploadAvatar = async (data, imageData) => {
    try {
      const avatarStorageRef = ref(storage, `avatar/${user.username}`);
      const res = await uploadBytes(avatarStorageRef, imageData);
      console.log(res);
      if (res) {
        //get the downloadbale url
        const newAvatarURL = await getDownloadURL(avatarStorageRef);

        if (newAvatarURL) {
          //sending the database update request;
          console.log(newAvatarURL);
          data["avatarURL"] = newAvatarURL;

          const res = await axios.patch("/api/user/update", data, {
            withCredentials: true,
          });
          console.log(res.data);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  React.useEffect(() => {
    setValue("fullname", user.fullname);
    setValue("professionalHeadline", user.professionalHeadline);
    setValue("city", user.city);
    setValue("country", user.country);
  }, []);

  return (
    <div className="bg-gray-500 bg-opacity-10 py-6 px-8 ">
      <ToastContainer
        hideProgressBar
        autoClose={3000}
        theme="colored"
        bodyClassName="font-bold text-sm"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col-reverse lg:grid grid-cols-2 gap-8"
      >
        <div>
          <Textfield
            register={register("fullname")}
            lable={"Name"}
            errors={errors}
            fieldname={"fullname"}
          />
          <Textfield
            register={register("professionalHeadline")}
            lable={"Professional Headline"}
            errors={errors}
            fieldname={"professionalHeadline"}
          />
          <Textfield
            register={register("city")}
            lable={"City"}
            errors={errors}
            fieldname={"city"}
          />
          <Textfield
            register={register("country")}
            lable={"Country"}
            errors={errors}
            fieldname={"country"}
          />

          <button
            type="submit"
            className="bg-darkBlack hover:bg-black 
            px-3 py-1.5 border border-gray-500 text-white flex items-center"
          >
            <AiOutlineSave className="text-lightblue" />
            &nbsp; Save
          </button>
        </div>

        <div>
          <p className="text-gray-300">Avatar</p>
          <div className="w-full border border-gray-600 flex flex-col items-center justify-center bg-gray-700 bg-opacity-10 rounded-sm py-2 mt-2 h-3/6">
            <div className="overflow-hidden flex items-center justify-center bg-black w-28 h-28 rounded-full">
              {watch("avatar") ? (
                watch("avatar")[0] ? (
                  // <img
                  //   className="h-full w-full"
                  //   src={URL.createObjectURL(watch("avatar")[0])}
                  //   alt=""
                  // />
                  <LazyLoadImage
                    effect="blur"
                    src={URL.createObjectURL(watch("avatar")[0])}
                    alt="profile"
                    height="full"
                    width="full"
                  />
                ) : (
                  <LazyLoadImage
                    effect="blur"
                    className="rounded-full"
                    src={user.avatarURL}
                    alt=""
                    height="full"
                    width="full"
                  />
                )
              ) : (
                <LazyLoadImage
                  effect="blur"
                  className="rounded-full"
                  src={user.avatarURL}
                  alt=""
                  height="full"
                  width="full"
                />
              )}
            </div>
            <input
              type="file"
              {...register("avatar")}
              id="hidden-input-avatar"
              className="hidden"
            />
            {watch("avatar") && watch("avatar")[0] && watch("avatar")[0].name}
            <button
              className="bg-darkBlack hover:bg-black 
            px-3 py-1.5 border border-gray-500 text-white flex items-center mx-auto mt-4"
              style={{ fontSize: "12px" }}
              type="button"
              onClick={() => {
                var inp = document.getElementById("hidden-input-avatar");
                inp.click();
              }}
            >
              <AiOutlineSave className="text-lightblue" />
              &nbsp; Upload New Avatar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileSettings;
