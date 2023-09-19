import { IDelivery, TMessage, TConstants } from "../types/types";

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

export const constants: TConstants = {
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
