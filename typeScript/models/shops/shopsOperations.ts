import { ShopsList } from "./shopsSchema";
import express from 'express';

const getAllShops = async (req: express.Request, res: express.Response) => {
  try {
    const list = await ShopsList.find();
    return list;
  } catch (error) {
    return error;
  }
};

const addShop = async (req: express.Request, res: express.Response) => {
  const newShop = await ShopsList.create(req.body);
  return newShop;
};

module.exports = {
  getAllShops,
  addShop,
};
