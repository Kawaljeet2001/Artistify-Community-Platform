import React from "react";
import axios from "axios";
import DisplayArtworkCard from "./DisplayArtworkCard";

const ArtworkGrid = () => {
  const getArtworks = async () => {
    try {
      const res = await axios.get("/api/artwork/");
      console.log(res.data.data);
      setArtworks(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const [artworks, setArtworks] = React.useState([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
  React.useEffect(() => {
    getArtworks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2 grid-rows-6 md:grid-cols-4 lg:grid-cols-8 w-full mb-3" style = {{minHeight : "50vh"}}>
      {artworks &&
        artworks.map((item, index) => (
          <DisplayArtworkCard item={item} index={index} />
        ))}
    </div>
  );
};
export default ArtworkGrid;
