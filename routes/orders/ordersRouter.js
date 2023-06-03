const express = require("express");
const {
  getAllOrders,
  addNewOrder,
} = require("../../models/orders/ordersOperstions");
// const {
//   registerUsresSchema,
//   loginSchema,
//   updatePasswordSchema,
//   refreshTokenSchema,
// } = require("../../models/users/userSchema");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    // const { error } = registerUsresSchema.validate(infoForRegister);
    // if (error) {
    //   res.status(400).json({ message: `${error}` });
    // } else {
    const addedOrder = addNewOrder(req.body);

    res.status(201).json({
      addedOrder,
    });
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
