import { Orders, addOrderValidation } from "./ordersSchema";
import { getUser, addUser } from "../user/userOperstions";
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
    const { _id }: { _id: string } = (await addUser({
      email,
      name,
      phone,
      address,
    })) as { _id: string };
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
      }) as unknown as IOrders;
      return list;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
