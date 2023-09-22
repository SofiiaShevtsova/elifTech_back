"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commons_1 = require("../../helpers/commons");
const ordersOperstions_1 = require("../../models/orders/ordersOperstions");
const commons_2 = require("../../middlewares/commons");
const commons_3 = require("../../validation-schemas/commons");
const router = express_1.default.Router();
router.post("/", (0, commons_2.validateBody)(commons_3.addOrderValidation), (0, commons_1.ctrlWrapper)(ordersOperstions_1.addNewOrder));
router.get("/", (0, commons_1.ctrlWrapper)(ordersOperstions_1.getAllOrders));
exports.default = router;
//# sourceMappingURL=ordersRouter.js.map