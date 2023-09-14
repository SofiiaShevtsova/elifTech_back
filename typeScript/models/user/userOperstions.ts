import { Users, addUserValidation } from "./userSchema";
import express from 'express';


const getUser = async (req: express.Request, res: express.Response) => {
  try {
    const userFind = await Users.findOne({ ...req });
    if (userFind) {
      return userFind;
    }
  } catch (error) {
    return error;
  }
};

const addUser = async (req: express.Request, res: express.Response) => {
  try {
    const { email } = req;
    const userFind = await Users.findOne({ email });
    if (userFind) {
      return userFind;
    }
    const { error } = addUserValidation.validate({ ...req });
    if (error) {
      res.status(400).json({ message: `${error}` });
    } else {
      const newUser = await Users.create({ ...req });
      return newUser;
    }
  } catch (error) {
    return error;
  }
};

module.exports = {
  getUser,
  addUser,
};
