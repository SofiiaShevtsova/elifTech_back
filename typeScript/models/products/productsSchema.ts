import mongoose from "mongoose";
import express from 'express';

const { Schema, model } = mongoose;

const productSchema = new Schema({
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

productSchema.post("save", (error: any, data: mongoose.Document, next: express.NextFunction) => {
  error.status = 400;
  next();
});

export const Products = model("Products", productSchema);
