"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./commons/constants");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const productsRouter_1 = __importDefault(require("./routes/products/productsRouter"));
const shopsRouter_1 = __importDefault(require("./routes/shops/shopsRouter"));
const ordersRouter_1 = __importDefault(require("./routes/orders/ordersRouter"));
const app = (0, express_1.default)();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use((0, morgan_1.default)(formatsLogger));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.static(constants_1.delivery.public));
app.use(constants_1.delivery.routes.shops, shopsRouter_1.default);
app.use(constants_1.delivery.routes.products, productsRouter_1.default);
app.use(constants_1.delivery.routes.orders, ordersRouter_1.default);
app.use((req, res) => {
    res.status(404).json({ message: constants_1.myMessage.notFound });
});
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message });
});
module.exports = app;
//# sourceMappingURL=app.js.map