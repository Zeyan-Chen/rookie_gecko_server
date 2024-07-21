const express = require("express");

const app = express();
app.use(express.json());
const connectDB = require("./connectMongodb");
connectDB();

const PORT = 8080;
app.listen(PORT, () => {
  console.log("server listen.");
});
