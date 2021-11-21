const express = require("express");
//creating router
const router = express.Router();

//importing controllers
const {
  allArtworksController,
  eachArtworkController,
  createArtworkController,
  userArtworksController,
  updateArtworkController,
  deleteArtworkController,
} = require("../controllers/artwork");
const { protectedRoute } = require("../middlewares/auth");
//for allartworks
router
  .route("/")
  .get(allArtworksController)
  //for creating a new artwork
  .post(protectedRoute, createArtworkController);

//each artwork
router
  .route("/:id")
  .get(eachArtworkController)
  .patch(protectedRoute, updateArtworkController)
  .delete(protectedRoute , deleteArtworkController);

router.route("/u/:username").get(userArtworksController);

module.exports = router;
