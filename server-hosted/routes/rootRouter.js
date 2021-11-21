const express = require("express");
const rootRouter = express.Router();

const artworkRouter = require("./artwork");
const userRouter = require("./user");
const authRouter = require("./auth");

rootRouter.use("/auth" , authRouter);
rootRouter.use("/user" , userRouter);
rootRouter.use("/artwork" , artworkRouter);



module.exports =  rootRouter;