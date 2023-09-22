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

export const travelApp: ITravelApp = {
  ROUTERS: {
    AUTH: {
      base: "/api/auth",
      register: "/sign-up",
      login: "/sign-in",
      current: "/authenticated-user",
      logout: '/log-out',
    },
    TRIPS: "/api/trips",
    BOOKINGS: "/api/bookings",
  },
};
