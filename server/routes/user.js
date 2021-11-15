const express = require("express");
const router = express.Router();

//getting controllers
const {
  userProfileController,
  updateUserProfileController,
  getUserSocialsController,
  updateUserSocialController,
} = require("../controllers/user");

//getting middlewares
const { protectedRoute } = require("../middlewares/auth");
router.route("/profile/:username").get(userProfileController);

router.route("/update").patch(protectedRoute, updateUserProfileController);

router
  .route("/social")
  .get(protectedRoute, getUserSocialsController)
  .patch(protectedRoute, updateUserSocialController);
module.exports = router;
