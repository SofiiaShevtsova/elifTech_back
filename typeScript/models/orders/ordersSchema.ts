import mongoose from "mongoose";
import { IOrders } from "../../types/commons";

const { Schema, model } = mongoose;

const orderSchema = new Schema<IOrders>({
  order: [
    {
      dishName: {
        type: String,
        required: [true, "Set name for dish"],
      },
      image: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      number: {
        type: Number,
        required: true,
      },
      shop: {
        type: String,
        required: true,
      },
    },
  ],
  totalPrice: {
    type: String,
    required: true,
  },
  dateOrder: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
});

orderSchema.pre("save", (error: any, next: any) => {
  error.status = 400;
  next();
});

export const Orders = model<IOrders>("Orders", orderSchema);
