import { Types } from "mongoose";

export type TOrdersAdd = {
  email: string;
  name: string;
  phone: string;
  address: string;
  order: string;
  totalPrice: string;
  dateOrder: string;
};

export interface IOrders {
  _id?: string;
  order: {
    dishName: string;
    image: string;
    price: string;
    number: number;
    shop: string;
  }[];
  totalPrice: string;
  dateOrder: string;
  owner: Types.ObjectId;
}
