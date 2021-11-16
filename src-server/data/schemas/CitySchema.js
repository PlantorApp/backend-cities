import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const citySchema = new Schema({
  id: {
    type: String,
    required: `Required field.`,
  },
  location: {
    type: String,
    required: `Required field.`,
  },
  month: {
    type: String,
    required: `Required field.`,
  },
  dayLight: {
    type: String,
    required: `Required field.`,
  },
  hourlyMeanTemperature: {
    type: String,
    required: `Required field.`,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});
