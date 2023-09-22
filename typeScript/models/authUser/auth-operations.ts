import { Request, Response, NextFunction } from "express";
import { UserTravel } from "./auth-schema";
import { IUserTravelApp, IUserAdd, TMessage } from "../../types/commons";
import { catchError, createToken } from "../../helpers/commons";
import bcrypt from "bcryptjs";

export const registerUser = async (
  req: Request<{}, {}, IUserAdd>,
  res: Response<IUserTravelApp>,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const userFind = await UserTravel.findOne({ email });
    if (userFind) {
      throw catchError(400, "A user with this email already exists!");
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const user = await UserTravel.create({ ...req, password: hashPassword });

    const updatedUser = createToken(user);
    await UserTravel.findByIdAndUpdate(user._id, { token: updatedUser.token });
    res.status(201).json(updatedUser);
  } catch (error: any) {
    throw catchError(400, error.message);
  }
};

export const loginUser = async (
  req: Request<{}, {}, IUserAdd>,
  res: Response<IUserTravelApp>,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;
    const user = await UserTravel.findOne({ email });
    if (!user) {
      throw catchError(401, "Email or password is wrong");
    }
    const compareResult = await bcrypt.compare(password, user.password);
    if (!compareResult) {
      throw catchError(401, "Email or password is wrong");
    }
    const updatedUser = createToken(user);
    await UserTravel.findByIdAndUpdate(user._id, { token: updatedUser.token });
    res.status(201).json(updatedUser);
  } catch (error: any) {
    throw catchError(400, error.message);
  }
};

export const getCurrentUser = (
  req: Request,
  res: Response<IUserTravelApp>,
  next: NextFunction
) => {
  const user = req.user;
  res.status(200).json(user);
};

export const logoutUser = async (
  req: Request,
  res: Response<TMessage>,
  next: NextFunction
) => {
  try {
    const user = req.user;
    const token = "";
    await UserTravel.findByIdAndUpdate(user._id, { token });
    res.status(204).json({ message: "The user has logged out!" });
  } catch (error: any) {
    throw catchError(400, error.message);
  }
};
