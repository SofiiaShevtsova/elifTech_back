import express from 'express';
import { Orders, addOrderValidation } from "./ordersSchema";
const { getUser, addUser } = require("../user/userOperstions");

const getAllOrders = async (req: express.Request, res: express.Response) => {
  try {
    const { email, phone } = req;
    const user = email ? { email } : { phone };
    const owner = await getUser(user);
    if (!owner) {
      throw new Error();
    }
    const list = await Orders.find({ owner }, "-createdAt -updatedAt");
    return list;
  } catch (error) {
    return error;
  }
};

const addNewOrder = async (req, res) => {
  try {
    const { email, name, phone, address, order, totalPrice, dateOrder } = req;
    const { _id } = await addUser({ email, name, phone, address });
    if (!_id) {
      throw new Error();
    }
    const { error } = addOrderValidation.validate({
      owner: _id,
      order,
      totalPrice,
      dateOrder,
    });
    if (error) {
      throw new Error({ message: `${error}` });
    } else {
      const list = await Orders.create({
        owner: _id,
        order,
        totalPrice,
        dateOrder,
      });
      return list;
    }
  } catch (error) {
    return error;
  }
};

module.exports = {
  addNewOrder,
  getAllOrders,
};
