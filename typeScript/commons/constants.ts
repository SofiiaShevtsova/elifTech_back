import { IDelivery, TMessage } from './types';

export const delivery: IDelivery = {
    routes: {
        shops: '/api/shops',
        products: '/api/products',
        orders: '/api/orders',
    },
    public: 'public',
}

export const myMessage: TMessage = {
notFound: 'Not Found!',
}

