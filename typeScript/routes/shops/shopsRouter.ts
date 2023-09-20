import express from "express";
import { getAllShops, addShop } from "../../models/shops/shopsOperations";
import { addShopsValidation } from "../../validation-schemas/shops-validation";
import { IShops } from "../../types/commons";
import { validateBody } from "../../middlewares/validation-body";

const router = express.Router();

router.post(
  "/",
  validateBody(addShopsValidation),
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const shop = await addShop(req);
      res.json(shop);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/allShops",
  async (
    req: express.Request,
    res: express.Response<IShops[]>,
    next: express.NextFunction
  ) => {
    try {
      const listOfShops = await getAllShops();
      res.json(listOfShops);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
