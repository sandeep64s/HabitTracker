const dotenv = require("dotenv");

dotenv.config();

const mongoose = require("mongoose");

exports.connectMongoose = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(
      "mongodb+srv://sandeep63s:1234@cluster0.igglpki.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      { useNewUrlParser: true }
    )
    .then((e) => console.log("Connected to Mongodb"))
    .catch((e) => console.log("Not Connect Mongodb", e));
};
