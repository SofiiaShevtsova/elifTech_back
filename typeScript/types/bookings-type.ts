import { Types } from "mongoose";

export interface IBookings {
  _id?: string;
  userId: Types.ObjectId;
  tripId: Types.ObjectId;
  guests: number;
  date: string;
  totalPrice: number;
  createdAt?: Date;
}
