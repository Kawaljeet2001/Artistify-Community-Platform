const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const schema = new mongoose.Schema({
  username: String,
  fullname: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatarURL: {
    type: String,
    default:
      "https://cdn2.vectorstock.com/i/1000x1000/23/81/default-avatar-profile-icon-vector-18942381.jpg",
  },
  description: {
    type: String,
    maxlength: 350,
    default: "",
  },
  professionalHeadline: {
    type: String,
    default: "",
  },
  socialMediaHandles: {
    type: Map,
    of: String,
    default: {
      Instagram: "",
      Facebook: "",
      Youtube: "",
      Behance: "",
    },
  },
  bannerImage: {
    type: String,
    default:
      "https://firebasestorage.googleapis.com/v0/b/artistifycommunity.appspot.com/o/banner%2Fdefault.jpg?alt=media&token=1b7f9947-44e0-4b7a-91f2-432a479b8ec0",
  },
  skills: [String],
  software: [String],
  resetToken: {
    type: String,
    default: "",
  },
});

//adding the bcrypt in pre middleware

schema.pre("save", async function (next) {
  try {
    let user = this;
    if (!user.isModified("password")) return next();
    else {
      const password = user.password;
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hashSync(password, saltRounds);
      user.password = hashedPassword;
      next();
    }
  } catch (err) {
    next(err);
  }
});

schema.methods.createResetToken = function(){
  //creating unique reset token using crypto
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.resetToken = resetToken;
  this.save()
  return resetToken;
};

schema.methods.resetPasswordMethod = function(password){
  this.password = password;
  this.resetToken = undefined;
  this.save();
};

const userModel = mongoose.model("User", schema);

module.exports = userModel;
