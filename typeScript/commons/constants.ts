import { IDelivery, TMessage, ITravelApp } from "../types/commons";

export const delivery: IDelivery = {
  routes: {
    shops: "/api/shops",
    products: "/api/products",
    orders: "/api/orders",
  },
  public: "public",
};

export const myMessage: TMessage = {
  notFound: "Not Found!",
};

export const constants: ITravelApp = {
  ROUTERS: {
    AUTH: {
      base: "/auth",
      register: "/sign-up",
      login: "/sign-in",
      current: "/authenticated-user",
    },
    TRIPS: "/trips",
    BOOKINGS: "/bookings",
  },
};
