import { Users } from "./user-schema";
import express from "express";
import { IUserDelivery } from "../../types/commons";

export const getUser = async (req: {
  email?: string;
  phone?: string;
}): Promise<IUserDelivery> => {
  try {
    const userFind = await Users.findOne({ ...req });
    if (!userFind) {
      throw new Error("Can not find user!");
    }
    return userFind;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const addUser = async (
  req: IUserDelivery,
  res?: express.Response
): Promise<IUserDelivery| undefined> => {
  try {
    const { email }= req;
    const userFind = await Users.findOne({ email });
    if (userFind) {
      return userFind;
    }
      const newUser = await Users.create({ ...req });
      return newUser;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
