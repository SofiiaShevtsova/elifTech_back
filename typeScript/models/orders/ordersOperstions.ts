import { Orders} from "./ordersSchema";
import { getUser, addUser } from "../user/userOperstions";
import { addOrderValidation } from "../../validation-schemas/commons";
import { IOrders, TOrdersAdd } from "../../types/commons";

export const getAllOrders = async (
  req: { email?: string; phone?: string },
): Promise<IOrders> => {
  try {
    const { email, phone } = req;
    const user = email ? { email } : { phone };
    const owner = await getUser(user);
    if (!owner) {
      throw new Error();
    }
    const list = await Orders.find({ owner }, "-createdAt -updatedAt") as unknown as IOrders;
    return list;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const addNewOrder = async (
  req: TOrdersAdd,
): Promise<IOrders> => {
  try {
    const { email, name, phone, address, order, totalPrice, dateOrder } = req;
    const user = await addUser({
      email,
      name,
      phone,
      address,
    });
    const idUser = user ? user._id : undefined;
    if (!idUser) {
      throw new Error();
    }
      const list = await Orders.create({
        owner: idUser,
        order,
        totalPrice,
        dateOrder,
      }) as unknown as IOrders;
      return list;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
