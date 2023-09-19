
export interface IDelivery {
  routes: {
    shops: string;
    products: string;
    orders: string;
  };
  public: string;
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

