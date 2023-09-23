import mongoose from "mongoose";
import { IBookings } from "../../types/commons";
import { mongooseHandleError } from "../../helpers/commons";

const { Schema, model } = mongoose;

const bookingsSchema = new Schema<IBookings>({
  userId: { type: Schema.Types.ObjectId, ref: "UserTravel", required: true },
  tripId: { type: Schema.Types.ObjectId, ref: "Trips", required: true },
  guests: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

bookingsSchema.post("save", mongooseHandleError);

export const Bookings = model<IBookings>("Bookings", bookingsSchema);
