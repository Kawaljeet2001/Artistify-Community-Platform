import React from "react";
import ArtworkDescription from "../components/Artwork/ArtworkDescription";
import ArtworkImages from "../components/Artwork/ArtworkImages";
import { useParams } from "react-router";
import { Redirect } from "react-router-dom";
import axios from "axios";

const ArtworkDetail = () => {
  const { artworkid } = useParams();
  const [details, setDetails] = React.useState();
  const [redirect, setRedirect] = React.useState(false);

  const getArtworkDetails = async () => {
    try {
      const res = await axios.get(`/api/artwork/${artworkid}`);
      setDetails(res.data);
    } catch (err) {
      console.log("Not found");
      setRedirect(true);
    }
  };

  React.useEffect(() => {
    getArtworkDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (details) document.title = `Artistify - ${details.data.artworkTitle}`;
  }, [details]);
  return (
    <div className="flex items-center flex-col bg-darkBlack pt-24 pb-16 min-h-screen">
      {redirect && <Redirect to="/404" />}
      {details && <ArtworkDescription data={details} />}
      {details && <ArtworkImages images={details.data.artworkImages} />}
    </div>
  );
};

export default ArtworkDetail;
