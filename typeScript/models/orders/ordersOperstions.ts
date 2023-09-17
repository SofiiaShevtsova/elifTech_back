import express from 'express';
import { Orders, addOrderValidation } from "./ordersSchema";
const { getUser, addUser } = require("../user/userOperstions");

const getAllOrders = async (req: {email: string, phone: string}, res: express.Response) => {
  try {
    const { email, phone }: {email: string, phone: string} = req;
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

const addNewOrder = async (req: { email: string, name: string, phone: string, address: string, order: string, totalPrice: string, dateOrder: string }, res: express.Response) => {
  try {
    const { email, name, phone, address, order, totalPrice, dateOrder } = req;
    const { _id }: {_id: string} = await addUser({ email, name, phone, address });
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
      throw new Error(`${error}`);
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
