import mongoose from "mongoose";
import express from 'express';
import { IUserTravelApp } from '../../types/commons';

const { Schema, model } = mongoose;

const userSchema = new Schema<IUserTravelApp>({
  fullName: {
    type: String,
    required: [true, "Set name for contact"],
  },
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  token: {
    type: String,
    default: "",
  },
});

userSchema.post("save", (error: any, next: express.NextFunction) => {
  error.status = 400;
  next();
});

export const UserTravel = model<IUserTravelApp>("User", userSchema);
