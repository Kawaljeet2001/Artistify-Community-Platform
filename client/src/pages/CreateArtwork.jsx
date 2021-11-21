import React from "react";
import { useForm } from "react-hook-form";
import ArtworkTitle from "../components/Artwork/CreateArtwork/ArtworkTitle";
import ArtworkDescription from "../components/Artwork/CreateArtwork/ArtworkDescription";
import Note from "../components/Artwork/CreateArtwork/Note";
import Visibility from "../components/Artwork/CreateArtwork/Visibility";
import PublishingOptions from "../components/Artwork/CreateArtwork/PublishingOptions";
import ThumbnailUpload from "../components/Artwork/CreateArtwork/ThumbnailUpload";
import ImageUploadSection from "../components/Artwork/CreateArtwork/ImageUploadSection";
import UploadedArtworks from "../components/Artwork/CreateArtwork/UploadedArtworks";
import LoadingFullscreen from "../components/LoadingFullscreen";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import SuccessfullArtworkCard from "../components/Artwork/CreateArtwork/SuccessfullArtworkCard";
const crypto = require("crypto");

const CreateArtwork = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});
  // const artworkId = crypto.randomBytes(8).toString("hex");
  // console.log(artworkId);
  const [uploadedImages, setUploadedImages] = React.useState([]);
  const [uploadedThumbnail, setUploadedThumbnail] = React.useState(null);
  const [submitted, setSubmitted] = React.useState(false);
  const [displaySuccessCard, setDisplaySuccessCard] = React.useState(false);
  const [artworkId, setArtworkId] = React.useState(null);

  const onSubmit = (data) => {
    setSubmitted(true);
    let imagesURLS = [];
    for (let i = 0; i < uploadedImages.length; i++) {
      imagesURLS.push(uploadedImages[i].imageURL);
    }
    const toUpload = {
      artworkTitle: data.artworkTitle,
      description: data.artworkDescription,
      artworkImages: imagesURLS,
      artworkId: artworkId,
      thumbnailURL: uploadedThumbnail,
    };
    
    console.log(toUpload);
    createArtwork(toUpload);
  };

  const createArtwork = async (data) => {
    try {
      const res = await axios.post("/api/artwork", data, {
        withCredentials: true,
      });
      if (res) {
        toast.success("Successfully created Artwork");
        setDisplaySuccessCard(res.data.data._id);
        console.log(res.data);
        localStorage.removeItem("newArtworkId");
      }
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem("newArtworkId")) {
      if(!artworkId)
      setArtworkId(localStorage.getItem("newArtworkId"));
      // setArtworkId("lulu");
    }
    else
    {
      console.log("does not exists");
      const id = crypto.randomBytes(8).toString("hex");
      setArtworkId(id);
      // setArtworkId("lulu")
      localStorage.setItem("newArtworkId", id);

    }

    document.title = "Artistify - New Artwork"
    // console.log(localStorage.getItem("newArtworkId"));
  }, [])

  return (
    <div className="bg-darkBlack py-12 px-4 w-full flex flex-col items-center justify-center h-full">
      <h1 className="text-white text-4xl font-extralight w-11/12">
        {watch("artworkTitle") ? watch("artworkTitle") : "Untitled"}
      </h1>
      {displaySuccessCard && (
        <SuccessfullArtworkCard
          createdArtworkId={displaySuccessCard}
          thumbnailURL={uploadedThumbnail}
        />
      )}
      <ToastContainer
        hideProgressBar
        autoClose={2000}
        theme="colored"
        bodyClassName="font-bold text-sm"
      />
      {submitted && <LoadingFullscreen />}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col lg:grid grid-cols-8 gap-8 w-11/12 mt-6 h-full"
      >
        <div className="col-span-6">
          <ArtworkTitle
            register={register("artworkTitle", {
              required: "Artwork Title is required!",
            })}
            errors={errors}
            fieldname={"artworkTitle"}
          />
          <ImageUploadSection
            setUploadedImages={(newData) =>
              setUploadedImages((prevState) => [...prevState, newData])
            }
            artworkId={artworkId}
          />
          {uploadedImages ? (
            <UploadedArtworks
              data={uploadedImages}
              updateUploadedImages={(updated) => setUploadedImages(updated)}
              artworkId={artworkId}
            />
          ) : null}
          <ArtworkDescription
            register={register("artworkDescription", {
              required: "Email is required!",
            })}
            fieldname={"artworkDescription"}
            errors={errors}
          />
        </div>

        <div className="col-span-2 flex flex-col">
          <Note />
          <PublishingOptions />
          <ThumbnailUpload
            setUploadedThumbnail={(newThumbnail) =>
              setUploadedThumbnail(newThumbnail)
            }
          />
          <Visibility
            register1={register("profilecheckbox", {
              required: "Check this box!",
            })}
            rgister2={register("portfoliocheckbox")}
            errors={errors}
            fieldname1={"profilecheckbox"}
            fieldname2={"portfoliocheckbox"}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateArtwork;
