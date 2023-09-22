import { NextFunction, Request, Response } from "express";
import { Orders } from "./orders-schema";
import { getUser, addUser } from "../user/user-operstions";
import { IOrders, TOrdersAdd } from "../../types/commons";
import { catchError } from "../../helpers/commons";

export const getAllOrders = async (
  req: Request<{}, {}, {}, { email?: string; phone?: string }>,
  res: Response<IOrders>,
  next: NextFunction
) => {
  try {
    const { email, phone } = req.query;
    const user = email ? { email } : { phone };
    const owner = await getUser(user);
    if (!owner) {
      throw catchError(404);
    }
    const list = (await Orders.find(
      { owner },
      "-createdAt -updatedAt"
    )) as unknown as IOrders;
    res.json(list);
  } catch (error) {
    next(error);
  }
};

export const addNewOrder = async (
  req: Request<{}, {}, TOrdersAdd>,
  res: Response<IOrders>,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, name, phone, address, order, totalPrice, dateOrder } =
      req.body;
    const user = await addUser({
      email,
      name,
      phone,
      address,
    });
    const idUser = user ? user._id : undefined;
    if (!idUser) {
      throw catchError(401);
    }
    const list = (await Orders.create({
      owner: idUser,
      order,
      totalPrice,
      dateOrder,
    })) as unknown as IOrders;
    if (!list) {
      throw catchError(404);
    }

    res.status(201).json(list);
  } catch (error) {
    next(error);
  }
};
