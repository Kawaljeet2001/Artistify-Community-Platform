const userModel = require("../models/user");

const userProfileController = async (req, res) => {
  try {
    const username = req.params.username;

    const userProfile = await userModel.findOne({ username: username });

    if (userProfile) {
      res.status(200).send({
        message: "User profile found!",
        data: userProfile,
      });
    } else {
      res.status(500).send({
        type : "404",
        message: "Error Occured.Profile not found!",
      });
    }
  } catch (err) {
    res.status(err.status).send(err.message);
  }
};

const updateUserProfileController = async (req, res) => {
  try {
    const updateData = req.body;
    const userProfile = await userModel.findOneAndUpdate(
      { _id: req.userId },
      updateData,
      {
        new: true,
      }
    );

    if (userProfile) {
      res.status(200).send({
        message: "User Profile updated.",
        data: userProfile,
      });
    } else {
      res.status(500).send("Profile not updated.");
    }
  } catch (err) {
    res.status(err.status).send(err.message);
  }
};

const getUserSocialsController = async (req, res) => {
  try {
    const userId = req.userId;
    const socials = await userModel.findById(userId);

    res.status(200).send(socials.socialMediaHandles);
  } catch (err) {
    res.status(err.status), send(err.message);
  }
};

const updateUserSocialController = async (req, res) => {
  try {
    const userId = req.userId;
    const data = req.body;

    const userData = await userModel.findById(userId);

    userData.socialMediaHandles.set(data.socialField, data.socialFieldLink);
    const savedModel = await userData.save();
    if (savedModel) {
      res.status(200).send({
        message: "Document upadted Successfully!",
        data: savedModel.socialMediaHandles,
      });
    } else {
      res.status(404).send("Document not found!");
    }
  } catch (err) {
    res.status(err.status).send(err.message);
  }
};

module.exports = {
  userProfileController,
  updateUserProfileController,
  getUserSocialsController,
  updateUserSocialController,
};
