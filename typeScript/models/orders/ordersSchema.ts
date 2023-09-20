import mongoose from "mongoose";
import { IOrders } from "../../types/commons";
import {mongooseHandleError} from '../../helpers/commons'

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

orderSchema.post("save", mongooseHandleError);

export const Orders = model<IOrders>("Orders", orderSchema);
