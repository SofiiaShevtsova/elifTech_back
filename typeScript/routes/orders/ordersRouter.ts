import express from 'express';
const {
  getAllOrders,
  addNewOrder,
} = require("../../models/orders/ordersOperstions");

const router = express.Router();

router.post("/", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const addedOrder = await addNewOrder(req.body);
    res.status(201).json(addedOrder);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const listOfOrders = await getAllOrders({ ...req.query });
    res.json(listOfOrders);
  } catch (error) {
    next(error);
  }
});

export default router;
