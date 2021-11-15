const express = require("express");
const router = express.Router();

const {
  loginUser,
  registerUser,
  logoutUser,
  checkUserLogin,
  resetPassword,
  forgetPassword,
  validResetToken,
} = require("../controllers/auth");
const {
  isUserAlreadyExisting,
  protectedRoute,
  isAlreadyLogged,
} = require("../middlewares/auth");

router.route("/login").post(isAlreadyLogged, loginUser);

router.route("/register").post(isUserAlreadyExisting, registerUser);

router.route("/logout").post(protectedRoute, logoutUser);

router.route("/checklogin").post(checkUserLogin);

router.route("/forgotpassword").post(forgetPassword);

router.route("/validresettoken").post(validResetToken);

router.route("/resetpassword/:token").post(resetPassword);

module.exports = router;
