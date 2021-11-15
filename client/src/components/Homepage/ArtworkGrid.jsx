import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

let arr = [];

for (let i = 0; i < 39; i++) arr.push(i + 1);

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

  const [artworks, setArtworks] = React.useState([]);
  React.useEffect(() => {
    getArtworks();
  }, []);

  return (
    <div className="grid grid-cols-2 grid-rows-6 md:grid-cols-4 lg:grid-cols-8 gap-0 w-full mb-3">
      {artworks &&
        artworks.map((item, index) => (
          <Link
            className={
              index === 3 || index === 21 || index === 31
                ? "group col-span-2 relative row-span-2 overflow-hidden flex items-center justify-center"
                : "group overflow-hidden relative flex items-center justify-center"
            }
            to={`/artwork/${item.linkId}`}
            key={index}
          >
            <div className="group-hover:opacity-70 opacity-0 bg-gradient-to-t from-black absolute bottom-0 w-full h-3/6 transition duration-200"></div>
            <img
              alt="grid-item-i"
              className="w-full h-full"
              src={item.thumbnailURL}
            />
          </Link>
        ))}
    </div>
  );
};
export default ArtworkGrid;
