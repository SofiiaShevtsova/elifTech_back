"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const constants_1 = require("./commons/constants");
const commons_1 = require("./helpers/commons");
const products_router_1 = __importDefault(require("./routes/products/products-router"));
const shops_router_1 = __importDefault(require("./routes/shops/shops-router"));
const orders_router_1 = __importDefault(require("./routes/orders/orders-router"));
const auth_router_1 = __importDefault(require("./routes/auth/auth-router"));
const trips_router_1 = __importDefault(require("./routes/trip/trips-router"));
const booking_router_1 = __importDefault(require("./routes/booking/booking-router"));
const app = (0, express_1.default)();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use((0, morgan_1.default)(formatsLogger));
app.use((0, cors_1.default)(commons_1.corsOptions));
app.use(express_1.default.json());
app.use(express_1.default.static(constants_1.delivery.public));
app.use(constants_1.delivery.routes.shops, shops_router_1.default);
app.use(constants_1.delivery.routes.products, products_router_1.default);
app.use(constants_1.delivery.routes.orders, orders_router_1.default);
app.use(constants_1.travelApp.ROUTERS.AUTH.base, auth_router_1.default);
app.use(constants_1.travelApp.ROUTERS.TRIPS, trips_router_1.default);
app.use(constants_1.travelApp.ROUTERS.BOOKINGS, booking_router_1.default);
app.use((req, res) => {
    res.status(404).json({ message: constants_1.myMessage.notFound });
});
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message });
});
module.exports = app;
//# sourceMappingURL=app.js.map