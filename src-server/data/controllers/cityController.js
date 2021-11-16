import mongoose from "mongoose";
import { citySchema } from "../schemas/CitySchema.js";

const City = mongoose.model("City", citySchema);

export const addNewCity = (req, res) => {
  let newCity = new City(req.body);

  newCity.save((err, city) => {
    if (err) {
      res.send(err);
    }
    res.json(city);
  });
};

export const getCities = (req, res) => {
  City.find({}, (err, city) => {
    if (err) {
      res.send(err);
      console.log(err);
    }
    res.json(city);
  });
};

export const getCityByID = (req, res) => {
  City.findOne({ sub: req.params.sub }, (err, city) => {
    if (err) {
      res.send(err);
      console.log(`findById: Error`);
      // console.log(err)
    }
    res.json(city);
    // console.log(city)
  });
};

export const updateCity = (req, res) => {
  City.findOneAndUpdate(
    { sub: req.params.sub },
    req.body,
    { new: true, useFindAndModify: false },
    (err, city) => {
      if (err) {
        res.send(err);
      }
      res.json(city);
    }
  );
};

export const deleteCity = (req, res) => {
  City.remove({ sub: req.params.sub }, (err, city) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "City Deleted" });
  });
};
