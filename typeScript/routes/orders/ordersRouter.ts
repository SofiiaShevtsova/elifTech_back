import express from "express";
import {
  getAllOrders,
  addNewOrder,
} from "../../models/orders/ordersOperstions";
import { IOrders, TOrdersAdd } from "../../types/commons";

const router = express.Router();

router.post(
  "/",
  async (
    req: express.Request<{}, {}, TOrdersAdd>,
    res: express.Response<IOrders>,
    next: express.NextFunction
  ) => {
    try {
      const addedOrder = await addNewOrder(req.body);
      res.status(201).json(addedOrder);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/",
  async (
    req: express.Request<{}, {}, {}, { email?: string; phone?: string }>,
    res: express.Response<IOrders>,
    next: express.NextFunction
  ) => {
    try {
      const listOfOrders = await getAllOrders({ ...req.query });
      res.json(listOfOrders);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
