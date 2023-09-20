import mongoose from "mongoose";
import express from 'express';
import { IUserDelivery } from "../../types/commons";
import {mongooseHandleError} from '../../helpers/commons'

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

userSchema.post("save", mongooseHandleError);

export const Users = model<IUserDelivery>("Users", userSchema);
