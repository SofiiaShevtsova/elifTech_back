"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.travelApp = exports.myMessage = exports.delivery = void 0;
exports.delivery = {
    routes: {
        shops: "/api/shops",
        products: "/api/products",
        orders: "/api/orders",
    },
    public: "public",
};
exports.myMessage = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not found",
    409: "Conflict",
};
exports.travelApp = {
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
//# sourceMappingURL=constants.js.map