import express from 'express';
import { Products } from './productsSchema';

export const getProducts = async (id: string) => {
  try {
    const list = await Products.find({ shop: id }, "-createdAt -updatedAt");
    return list;
  } catch (error) {
    return error;
  }
};

export const addProduct = async (req: express.Request) => {
  const product = await Products.create({ ...req.body });
  return product;
};
