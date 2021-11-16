import express from "express";
import mongoose from "mongoose";
import UserModel from "./models/Cities";
// import bodyParser from 'body-parser'
// import RateLimit from 'express-rate-limit'
// import helmet from 'helmet'
import cors from "cors";
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3004;
app.use(cors());

/// DATABASE CONNECTION
mongoose.connect(
  //  "mongodb+srv://users-admin:3CqZS2kaNf7hQRVU@cluster0.jblkf.mongodb.net/dimpledesk?retryWrites=true&w=majority",
  "mongodb+srv://citiesColl:aUP7c4aL1TvBNZZz@cluster0.g9hsd.mongodb.net/PlantorDB?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("connected successfully");
});

app.get("/cities", async (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send("cities are", result);
    }
  });
});

app.listen(PORT, () => {
  console.log("You are connected!");
});
