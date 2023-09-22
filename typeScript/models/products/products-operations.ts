import { Request, Response, NextFunction } from "express";
import { Products } from "./products-schema";
import { IProducts } from "../../types/commons";

export const getProducts = async (
  req: Request<{ shop_id: string }>,
  res: Response<IProducts[]>,
  next: NextFunction
) => {
  try {
    const { shop_id } = req.params;
    const list = await Products.find(
      { shop: shop_id },
      "-createdAt -updatedAt"
    );
    if (!list) {
      throw new Error();
    }
    res.json(list);
  } catch (error) {
    next(error);
  }
};

export const addProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const product = await Products.create({ ...req.body });
    res.json(product);
  } catch (error) {
    next(error);
  }
};
