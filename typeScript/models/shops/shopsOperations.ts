import { ShopsList } from "./shopsSchema";
import express from 'express';

export const getAllShops = async () => {
  try {
    const list = await ShopsList.find();
    return list;
  } catch (error) {
    return error;
  }
};

export const addShop = async (req: express.Request) => {
  const newShop = await ShopsList.create(req.body);
  return newShop;
};
