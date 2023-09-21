import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { IUserTravelApp } from "../types/commons";

dotenv.config();
const { ACCESS_SECRET_KEY } = process.env;

export const createToken = (user: IUserTravelApp): IUserTravelApp => {
  const payload = { id: user._id };
  if (ACCESS_SECRET_KEY) {
    const token = jwt.sign(payload, ACCESS_SECRET_KEY, { expiresIn: "24h" });
    user.token = token;
  }
  return user;
};
