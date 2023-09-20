import mongoose from "mongoose";
import express from "express";
import { IShops } from "../../types/commons";

const { Schema, model } = mongoose;

const shopsSchema = new Schema<IShops>({
  shopName: {
    type: String,
    required: [true, "Set name for shop"],
    unique: true,
  },
  address: {
    type: String,
  },
  logo: {
    type: String,
  },
});

shopsSchema.post("save", (error: any, next: express.NextFunction) => {
  error.status = 400;
  next();
});

export const ShopsList = model<IShops>("ShopsList", shopsSchema);
