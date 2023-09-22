import mongoose from "mongoose";
import { ITrips } from "../../types/commons";
import { mongooseHandleError } from "../../helpers/commons";

const { Schema, model } = mongoose;

const tripsSchema = new Schema<ITrips>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

tripsSchema.post("save", mongooseHandleError);

export const Trips = model<ITrips>("Trips", tripsSchema);
