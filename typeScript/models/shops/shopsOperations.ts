import { ShopsList } from "./shopsSchema";
import express from "express";
import { IShops } from "../../types/commons";

export const getAllShops = async (): Promise<IShops[]> => {
  try {
    const list = await ShopsList.find();
    return list;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const addShop = async (req: express.Request): Promise<IShops> => {
  const newShop = await ShopsList.create(req.body);
  return newShop;
};
