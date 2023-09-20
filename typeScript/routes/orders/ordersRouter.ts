import express from "express";
import { ctrlWrapper } from "../../helpers/commons";
import {
  getAllOrders,
  addNewOrder,
} from "../../models/orders/ordersOperstions";
import { validateBody } from "../../middlewares/commons";
import { addOrderValidation } from "../../validation-schemas/commons";

const router = express.Router();

router.post("/", validateBody(addOrderValidation), ctrlWrapper(addNewOrder));

router.get("/", ctrlWrapper(getAllOrders));

export default router;
