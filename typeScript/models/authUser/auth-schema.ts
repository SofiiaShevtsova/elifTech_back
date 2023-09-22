import mongoose from "mongoose";
import { IUserTravelApp } from '../../types/commons';
import {mongooseHandleError} from '../../helpers/commons'


const { Schema, model } = mongoose;

const userSchema = new Schema<IUserTravelApp>({
  fullName: {
    type: String,
    required: [true, "Set name"],
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

userSchema.post("save", mongooseHandleError);

export const UserTravel = model<IUserTravelApp>("UserTravel", userSchema);
