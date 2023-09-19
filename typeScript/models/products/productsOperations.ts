import express from "express";
import { Products } from "./productsSchema";
import { IProducts } from "../../types/commons";

export const getProducts = async (id: string): Promise<IProducts[]> => {
  try {
    const list = await Products.find({ shop: id }, "-createdAt -updatedAt");
    if (list) {
      return list;
    }
       throw new Error ()

  } catch (error: any) {
   throw new Error (error.message)
  }
};

export const addProduct = async (req: express.Request) => {
  const product = await Products.create({ ...req.body });
  return product;
};
