const mongoose = require("mongoose");
require("dotenv").config();

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo successfully!");
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
