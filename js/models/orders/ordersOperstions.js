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
const ordersSchema_1 = require("./ordersSchema");
const { getUser, addUser } = require("../user/userOperstions");
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, phone } = req;
        const user = email ? { email } : { phone };
        const owner = yield getUser(user);
        if (!owner) {
            throw new Error();
        }
        const list = yield ordersSchema_1.Orders.find({ owner }, "-createdAt -updatedAt");
        return list;
    }
    catch (error) {
        return error;
    }
});
const addNewOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, name, phone, address, order, totalPrice, dateOrder } = req;
        const { _id } = yield addUser({ email, name, phone, address });
        if (!_id) {
            throw new Error();
        }
        const { error } = ordersSchema_1.addOrderValidation.validate({
            owner: _id,
            order,
            totalPrice,
            dateOrder,
        });
        if (error) {
            throw new Error(`${error}`);
        }
        else {
            const list = yield ordersSchema_1.Orders.create({
                owner: _id,
                order,
                totalPrice,
                dateOrder,
            });
            return list;
        }
    }
    catch (error) {
        return error;
    }
});
module.exports = {
    addNewOrder,
    getAllOrders,
};
//# sourceMappingURL=ordersOperstions.js.map