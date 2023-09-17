import mongoose from "mongoose";
import Joi from "joi";
import express from 'express';

const { Schema, model } = mongoose;

const shopsSchema = new Schema({
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

export const ShopsList = model("ShopsList", shopsSchema);

export const addShopsValidation = Joi.object({
  shopName: Joi.string().required(),
  address: Joi.string().required(),
  logo: Joi.string().required(),
});