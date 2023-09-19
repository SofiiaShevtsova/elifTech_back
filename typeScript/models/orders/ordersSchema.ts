import mongoose from "mongoose";
import Joi from "joi";
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

export const addOrderValidation = Joi.object({
  order: Joi.array().items(
    Joi.object({
      dishName: Joi.string().required(),
      image: Joi.string().required(),
      price: Joi.string().required(),
      number: Joi.number().required(),
      shop: Joi.string().required(),
    })
  ),
  totalPrice: Joi.string().required(),
  dateOrder: Joi.string().required(),
  owner: Joi.any(),
});
