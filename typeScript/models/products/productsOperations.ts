import express from 'express';
import { Products } from './productsSchema';

const getProducts = async (id: string) => {
  try {
    const list = await Products.find({ shop: id }, "-createdAt -updatedAt");
    return list;
  } catch (error) {
    return error;
  }
};

const addProduct = async (req: express.Request, res: express.Response) => {
  const product = await Products.create({ ...req.body });
  return product;
};

module.exports = {
  getProducts,
  addProduct,
};
