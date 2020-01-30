const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// MongoDB Atlas
mongoose.connect(`${process.env.MONGODB_ATLAS}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

app.use(cors());
app.use(express.json());
app.use("/storage", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

console.log("Server running in http://localhost:3333");
app.listen(3333);
