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
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
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
