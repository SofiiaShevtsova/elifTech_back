
export interface IDelivery {
  routes: {
    shops: string;
    products: string;
    orders: string;
  };
  public: string;
}

export interface ITravelApp {
  ROUTERS: {
    AUTH: {
      base: string;
      register: string;
      login: string;
      current: string;
      logout: string;
    };
    TRIPS: string;
    BOOKINGS: string;
  };
};

export type TMessage = {
  [key: string]: string;
};

