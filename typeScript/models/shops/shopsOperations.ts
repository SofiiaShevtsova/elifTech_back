import { Request, Response, NextFunction } from "express";
import { ShopsList } from "./shopsSchema";
import { IShops } from "../../types/commons";

export const getAllShops = async (
  req: Request,
  res: Response<IShops[]>,
  next: NextFunction
) => {
  try {
    const list = await ShopsList.find();
    res.json(list);
  } catch (error) {
    next(error);
  }
};

export const addShop = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newShop = await ShopsList.create(req.body);
    res.json(newShop);
  } catch (error) {
    next(error);
  }
};
