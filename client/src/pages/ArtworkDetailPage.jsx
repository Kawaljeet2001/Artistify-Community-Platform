import React from "react";
import ArtworkDescription from "../components/Artwork/ArtworkDescription";
import ArtworkImages from "../components/Artwork/ArtworkImages";
import { useParams } from "react-router";
import axios from "axios";

const ArtworkDetail = () => {
  const { artworkid } = useParams();
  const [details, setDetails] = React.useState();

  const getArtworkDetails = async () => {
    try {
      const res = await axios.get(`/api/artwork/${artworkid}`);
      setDetails(res.data.data);
      console.log(res.data);
    } catch (err) {
      if (err) {
        console.log("Not found");
      }
    }
  };

  React.useEffect(() => {
    getArtworkDetails();
  }, []);

  return (
    <div className="flex items-center flex-col bg-darkBlack pt-24 pb-16 min-h-screen">
      {details && <ArtworkDescription data = {details}/>}
      {details && <ArtworkImages images = {details.artworkImages}/>}
    </div>
  );
};

export default ArtworkDetail;
