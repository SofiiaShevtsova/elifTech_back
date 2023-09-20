"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrderValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.addOrderValidation = joi_1.default.object({
    order: joi_1.default.array().items(joi_1.default.object({
        dishName: joi_1.default.string().required(),
        image: joi_1.default.string().required(),
        price: joi_1.default.string().required(),
        number: joi_1.default.number().required(),
        shop: joi_1.default.string().required(),
    })),
    totalPrice: joi_1.default.string().required(),
    dateOrder: joi_1.default.string().required(),
    owner: joi_1.default.any(),
});
//# sourceMappingURL=orders-validation.js.map