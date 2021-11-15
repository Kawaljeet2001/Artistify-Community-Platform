const express = require('express');
const app = express();
//port
const port = process.env.port || 5000;
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true };

app.use(cors(corsOptions));
require('dotenv').config();
const cookies = require("cookie-parser");
app.use(cookies());
//router imports
const artworkRouter = require("./routes/artwork");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
//configuring environment variables

//importing database connection module
const database = require("./utils/database");
database.on("error" , console.error.bind(console , "connection error: "));
database.once("open" , () => console.log("Database connection successful"));

//ensuring json parsing
app.use(express.json());

//router mounts
app.use("/api/artwork" , artworkRouter);
app.use("/api/user" , userRouter);
app.use("/api/auth" , authRouter);


//root endpoint
app.get("/api" , (req , res) => {
    res.status(200).send("Server up and running");
})

app.listen(port , () => {
    console.log("Server is up and running at port" , port);
})