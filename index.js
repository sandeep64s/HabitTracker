require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const router = require("./routes/routes");
const cors =require("cors");

var corsOptions = {
    origin: true,
};

app.use(cors(corsOptions));
// Setting Up view engine and Views Folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Mongoose Connection
const { connectMongoose } = require("./app/db");
connectMongoose();

// Connecting Assets Folder / Static Files
app.use("/assets", express.static("./assets"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Setting up routes
app.use(router);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running at port: ${5000}`);
});
