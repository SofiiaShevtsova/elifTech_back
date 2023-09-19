import mongoose from "mongoose";
import express from 'express';
import { IProducts } from '../../types/commons';

const { Schema, model } = mongoose;

const productSchema = new Schema<IProducts>({
  dishName: {
    type: String,
    required: [true, "Set name for dish"],
  },
  image: {
    type: String,
  },
  price: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  composition: {
    type: [{ type: String }],
  },
  shop: {
    type: Schema.Types.ObjectId,
    ref: "ShopsList",
    required: true,
  },
});

productSchema.post("save", (error: any, next: express.NextFunction) => {
  error.status = 400;
  next();
});

export const Products = model<IProducts>("Products", productSchema);
