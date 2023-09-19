import mongoose from "mongoose";
import Joi from "joi";
import express from 'express';
import { IUserDelivery } from "../../types/commons";

const { Schema, model } = mongoose;

const userSchema = new Schema<IUserDelivery>({
  name: {
    type: String,
    required: [true, "Set name"],
  },
  email: {
    type: String,
    required: [true, "Set email"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Set phone"],
    unique: true,
  },
  address: {
    type: String,
    required: [true, "Set address"],
  },
});

userSchema.post("save", (error: any, next: express.NextFunction) => {
  error.status = 400;
  next();
});

export const Users = model<IUserDelivery>("Users", userSchema);

export const addUserValidation = Joi.object({
  name: Joi.string().max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
});
