import express from "express";
import { getAllShops, addShop } from "../../models/shops/shopsOperations";
import { addShopsValidation } from "../../models/shops/shopsSchema";
import { IShops } from "../../types/commons";

const router = express.Router();

router.post(
  "/",
  async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    try {
      const { error } = addShopsValidation.validate(req.body);
      if (error) {
        res.status(400).json({ message: `${error}` });
      } else {
        const shop = await addShop(req);
        res.json(shop);
      }
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
