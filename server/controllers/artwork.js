const artworkModel = require("../models/artwork");
const userModel = require("../models/user");

const allArtworksController = async (req, res) => {
  try {
    const allArtworks = await artworkModel.aggregate([
      { $sample: { size: 39 } },
    ]);

    if (allArtworks) {
      let toSend = [];
      for (let i = 0; i < allArtworks.length; i++) {
        let obj = {
          thumbnailURL: allArtworks[i].thumbnailURL,
          linkId: allArtworks[i]._id,
        };
        toSend.push(obj);
      }
      res.status(200).json({
        message: "All artworks are displayed.",
        data: toSend,
      });
    } else {
      res.status(500).send("Artworks not found! Server Error.");
    }
  } catch (err) {
    res.status(err.status).send(err.message);
  }
};

// const eachArtworkController = async (req, res) => {
//   try {
//     const artworkId = req.params.id;
//     const artwork = await artworkModel.findOne({ _id: artworkId });
//     console.log(artwork);
//     // if (artwork) {
//     //   //finding the user
//     //   const user = await userModel.findOne({ username: artwork.ownedBy });
//     //   if (!user) {
//     //     res.status(403).send("User Not Found");
//     //   } else {
//     //     res.status(200).send({
//     //       data: artwork,
//     //       user: {username : user.username, fullname : user.fullname}
//     //     });
//     //   }
//     // } else {
//     //   res.status(404).send({
//     //     message: "Artwork not found!",
//     //   });
//     // }
//     res.status(200).send("yo")
//   } catch (err) {
//     res.status(err.status).send(err.message);
//   }
// };

const eachArtworkController = async (req, res) => {
  const artworkId = req.params.id;
  try {
    const artwork = await artworkModel.findOne({ _id: artworkId });
    if (!artworkId) {
      res.status(404).send({
        message: "Artwork Not found!",
      });
    } else {
      const user = await userModel.findOne({ username: artwork.ownedBy });
      if (user) {
        res.status(200).send({
          data: artwork,
          user: { username: user.username, fullname: user.fullname },
        });
      } else {
        res.status(500).send({
          message: "Internal server error, artwork does not exists.",
        });
      }
    }
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

const createArtworkController = async (req, res) => {
  try {
    const data = req.body;
    data.ownedBy = req.cookies.userProfile.username;
    console.log(data);
    //adding the username to artworkData
    const newArtwork = new artworkModel(data);
    const savedArtwork = await newArtwork.save();

    if (savedArtwork) {
      res.status(200).send({
        message: "Artwork Created Successfully",
        data: savedArtwork,
      });
    } else {
      res.status(500).send({
        message: "Error Occured while saving! Artwork not saved.",
      });
    }
  } catch (err) {
    res.status(err.status).send({
      message: err.message,
    });
  }
};

const userArtworksController = async (req, res) => {
  try {
    const username = req.params.username;

    //finding all artworks of the user with this username
    const allArtworks = await artworkModel.find({ ownedBy: username });
    if (allArtworks) {
      res.status(200).send({
        message: "Artworks found!",
        data: allArtworks,
      });
    } else {
      res.status(404).send({
        message: "Page not found",
      });
    }
  } catch (err) {
    res.status(err.status).send({
      message: err.message,
    });
  }
};

const updateArtworkController = async (req, res) => {
  try {
    const artworkid = req.params.id;
    const artwork = await artworkModel.findOneAndUpdate(
      { _id: artworkid },
      req.body
    );

    if (artwork) {
      res.status(200).send({
        message: "Update artwork Data successfully!",
      });
    } else {
      res.status(403).send("Artwork not found!");
    }
  } catch (err) {
    res.status(err.status).send(err.message);
  }
};

const deleteArtworkController = async (req, res) => {
  try {
    const artworkid = req.params.id;

    const toDelete = await artworkModel.findOneAndDelete({ _id: artworkid });

    if (toDelete) res.status(200).send("Artwork Deleted Successfully!");
    else
      res
        .status(500)
        .send({ message: "Error occured! Not able to delete artwork." });
  } catch (err) {
    res.status(err.status).send(err.message);
  }
};

module.exports = {
  allArtworksController,
  eachArtworkController,
  createArtworkController,
  userArtworksController,
  updateArtworkController,
  deleteArtworkController,
};
