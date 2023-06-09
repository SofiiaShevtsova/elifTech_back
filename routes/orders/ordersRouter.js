const express = require("express");
const {
  getAllOrders,
  addNewOrder,
} = require("../../models/orders/ordersOperstions");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const addedOrder = await addNewOrder(req.body);
    res.status(201).json(addedOrder);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const listOfOrders = await getAllOrders({ ...req.query });
    res.json(listOfOrders);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
