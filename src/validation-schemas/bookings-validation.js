"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBookingValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.addBookingValidation = joi_1.default.object({
    order: joi_1.default.array().items(joi_1.default.object({
        dishName: joi_1.default.string().required(),
        image: joi_1.default.string().required(),
        price: joi_1.default.string().required(),
        number: joi_1.default.number().required(),
        shop: joi_1.default.string().required(),
    })),
    totalPrice: joi_1.default.string().required(),
    dateOrder: joi_1.default.string().required(),
    name: joi_1.default.string().max(30).required(),
    email: joi_1.default.string().email().required(),
    phone: joi_1.default.string().required(),
    address: joi_1.default.string().required(),
});
//# sourceMappingURL=bookings-validation.js.map