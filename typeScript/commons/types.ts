import { Types } from "mongoose";

export interface IDelivery {
  routes: {
    shops: string;
    products: string;
    orders: string;
  };
  public: string;
}

export interface IOrder {
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

export type TConstants = {
  ROUTERS: {
    AUTH: {
      base: string;
      register: string;
      login: string;
      current: string;
    };
    TRIPS: string;
    BOOKINGS: string;
  };
};

export type TMessage = {
  [key: string]: string;
};
