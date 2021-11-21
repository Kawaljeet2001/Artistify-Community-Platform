const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

require("dotenv").config();
//ensuring json parsing
app.use(express.json());

const cookies = require("cookie-parser");
app.use(cookies());

//serving static files
// const buildPath = path.normalize(path.join(__dirname, "../client/build"));
// app.use(express.static(buildPath));

//router imports
const rootRouter = require("./routes/rootRouter");
//router mounts
app.use("/api", rootRouter);

//importing database connection module
const database = require("./utils/database");
database.on("error", console.error.bind(console, "connection error: "));
database.once("open", () => console.log("Database connection successful"));



//sending allrequest to index.html
// if (process.env.ENV_MODE === "production") {
//   app.get("/*", function (req, res) {
//     res.sendFile(path.join(buildPath, "index.html"));
//   });
// }

//root endpoint
app.get("/api", (req, res) => {
  res.status(200).send("Server up and running");
});

app.listen(port, () => {
  console.log("Server is up and running at port", port);
});


// "proxy": "http://obscure-savannah-20433.herokuapp.com",