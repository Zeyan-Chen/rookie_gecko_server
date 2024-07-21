const mongoose = require("mongoose");

const mongodb_connect_url =
  "mongodb+srv://leoyanisme:N5RtMqUIYLMNI4Mv@rookie.m9pn82h.mongodb.net/?retryWrites=true&w=majority&appName=rookie";

const connectDB = async () => {
  try {
    await mongoose.connect(mongodb_connect_url);
    console.log("connect success");
  } catch (error) {
    console.log("fail: " + error.message);
  }
};

module.exports = connectDB;
