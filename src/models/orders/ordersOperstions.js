"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewOrder = exports.getAllOrders = void 0;
const ordersSchema_1 = require("./ordersSchema");
const userOperstions_1 = require("../user/userOperstions");
const commons_1 = require("../../helpers/commons");
const getAllOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, phone } = req.query;
        const user = email ? { email } : { phone };
        const owner = yield (0, userOperstions_1.getUser)(user);
        if (!owner) {
            throw (0, commons_1.catchError)(404);
        }
        const list = (yield ordersSchema_1.Orders.find({ owner }, "-createdAt -updatedAt"));
        res.json(list);
    }
    catch (error) {
        next(error);
    }
});
exports.getAllOrders = getAllOrders;
const addNewOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, name, phone, address, order, totalPrice, dateOrder } = req.body;
        const user = yield (0, userOperstions_1.addUser)({
            email,
            name,
            phone,
            address,
        });
        const idUser = user ? user._id : undefined;
        if (!idUser) {
            throw (0, commons_1.catchError)(401);
        }
        const list = (yield ordersSchema_1.Orders.create({
            owner: idUser,
            order,
            totalPrice,
            dateOrder,
        }));
        if (!list) {
            throw (0, commons_1.catchError)(404);
        }
        res.status(201).json(list);
    }
    catch (error) {
        next(error);
    }
});
exports.addNewOrder = addNewOrder;
//# sourceMappingURL=ordersOperstions.js.map