"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constants = exports.myMessage = exports.delivery = void 0;
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
exports.constants = {
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
//# sourceMappingURL=constants.js.map