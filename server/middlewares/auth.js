const userModel = require("../models/user");
const jwt = require("jsonwebtoken");

const JWT_KEY = process.env.JWT_TOKEN_KEY;
const isUserAlreadyExisting = async (req, res, next) => {
  const { email } = req.body;
  const user = await userModel.findOne({ email: email });

  if (user) {
    res.status(403).send({
      message: "A User with this email already exists.",
    });
  } else {
    next();
  }
};

const protectedRoute = (req, res, next) => {
  //checking if the user is loggedin or not
  if (req.cookies.isLoggedIn) {
    const verifyToken = jwt.verify(req.cookies.isLoggedIn, JWT_KEY);

    if (verifyToken) {
      req.userId = verifyToken.uid;
      next();
    } else {
      res.status(401).send({
        message: "Invalid token. Login again!",
      });
    }
  } else {
    res.status(401).send({
      message: "Operation not allowed! Only authenticated user allowed!",
    });
  }
};

const isAlreadyLogged = (req, res, next) => {
  if (req.cookies.isLoggedIn) {
    res.status(403).send({
      message: "A user is already loggedin! Cannot Login again.",
    });
  } else next();
};
module.exports = { isUserAlreadyExisting, protectedRoute, isAlreadyLogged };
