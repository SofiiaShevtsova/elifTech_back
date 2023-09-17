import { Users, addUserValidation } from "./userSchema";
import express from 'express';


export const getUser = async (req: {email?: string, phone?: string}, res?: express.Response) => {
  try {
    const userFind = await Users.findOne({ ...req });
    if (userFind) {
      return userFind;
    }
  } catch (error) {
    return error;
  }
};

export const addUser = async (req: { email: string, name: string, phone: string, address: string}, res?: express.Response) => {
  try {
    const { email }: {email: string} = req;
    const userFind = await Users.findOne({ email });
    if (userFind) {
      return userFind;
    }
    const { error } = addUserValidation.validate({ ...req });
    if (error) {
      res && res.status(400).json({ message: `${error}` });
    } else {
      const newUser = await Users.create({ ...req });
      return newUser;
    }
  } catch (error) {
    return error;
  }
};
