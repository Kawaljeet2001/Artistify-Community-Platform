const userModel = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const sendMail = require("../utils/nodemailer");
//importing middleware functions
const JWT_KEY = process.env.JWT_TOKEN_KEY;

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await userModel.findOne({ email: email });

  if (!existingUser) {
    res.status(500).send({
      message: "User not found!",
    });
  } else {
    //checking for password
    let storedHash = existingUser.password;
    const isUserVerified = await bcrypt.compare(password, storedHash);
    if (isUserVerified) {
      //implementing jwttoken
      const token = jwt.sign({ uid: existingUser["_id"] }, JWT_KEY);
      //by default using the HMAC SHA256 encryption algo
      res.cookie("isLoggedIn", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 3600000 * 24),
      });
      res.cookie("userProfile", existingUser, {
        httpOnly: true,
        expires: new Date(Date.now() + 3600000 * 24),
      });
      res.status(200).send({
        message: "User login successful",
        data: existingUser,
      });
    } else {
      res.status(500).send({
        message: "Email and password do not match",
      });
    }
  }
};

const registerUser = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      res.status(401).send({
        message: "Username/Password missing",
      });
    }
    //checking if the user already exists or not
    const newUser = new userModel({
      username: username,
      password: password,
      email: email,
    });
    const newUserCreated = await newUser.save();

    res.status(200).send({
      message: "User created successfully",
      data: newUserCreated,
    });
  } catch (err) {
    res.status(err.status).send({
      message: err.message,
    });
  }
};

const logoutUser = (req, res) => {
  //deleting the cookies
  res.clearCookie("isLoggedIn");
  res.clearCookie("userProfile");

  res.status(200).send({
    message: "User logged out.",
  });
};

const checkUserLogin = async (req, res) => {
  if (req.cookies.isLoggedIn) {
    const verifyToken = jwt.verify(req.cookies.isLoggedIn, JWT_KEY);
    if (verifyToken) {
      const uid = verifyToken.uid;
      const userData = await userModel.findOne({ _id: uid });
      res.status(200).send({
        type: "SUCCESS",
        message: "User Already Logged In.",
        data: userData,
      });
    } else {
      //reset the cookies
      res.clearCookie("isLoggedIn");
      res.clearCookie("userProfile");
      res.status(200).send({
        type: "EXPIRED_JWT",
        message: "Auth Token Expired. Login Again!",
      });
    }
  } else {
    res.status(403).send({
      message: "User not logged In.",
    });
  }
};

const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userModel.findOne({ email: email });
    if (user) {
      //generating a reset token
      const resetToken = user.createResetToken();
      let resetPasswordLink = `${req.protocol}://localhost:3000/resetpassword/${resetToken}`;
      sendMail(res, resetPasswordLink, user.email);
    } else {
      res.status(500).send({
        message: "There is no user with this email",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(err.status).send(err.message);
  }
};

const resetPassword = async (req, res) => {
  try {
    const token = req.params.token;
    const { password } = req.body;
    const user = await userModel.findOne({ resetToken: token });

    if (user) {
      user.resetPasswordMethod(password);
      //this will update the new user password in the db
      res.status(200).send("Password updated successfully! Login again!");
    } else {
      res.status(500).send({
        message: "User does not exists!",
      });
    }
  } catch (err) {
    res.status(err.status).send(err.message);
  }
};

const validResetToken = async (req, res) => {
  try {
    const { resetToken } = req.body;
    const user = await userModel.findOne({ resetToken: resetToken });

    if (user) {
      res.status(200).send("Valid token. User found.");
    } else {
      res.status(404).send({
        message: "Invalid reset token.",
      });
    }
  } catch (err) {
    res.status(err.status).send(err.message);
  }
};
module.exports = {
  loginUser,
  registerUser,
  logoutUser,
  checkUserLogin,
  resetPassword,
  forgetPassword,
  validResetToken,
};
