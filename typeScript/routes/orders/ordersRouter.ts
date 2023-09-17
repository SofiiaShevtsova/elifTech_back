import express from 'express';
import {
  getAllOrders,
  addNewOrder,
} from "../../models/orders/ordersOperstions";

const router = express.Router();

router.post("/", async (req: {body:{ email: string, name: string, phone: string, address: string, order: string, totalPrice: string, dateOrder: string }}, res: express.Response, next: express.NextFunction) => {
  try {
    const addedOrder = await addNewOrder(req.body);
    res.status(201).json(addedOrder);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req: {query:{email: string, phone: string}}, res: express.Response, next: express.NextFunction) => {
  try {
    const listOfOrders = await getAllOrders({ ...req.query });
    res.json(listOfOrders);
  } catch (error) {
    next(error);
  }
});

export default router;
