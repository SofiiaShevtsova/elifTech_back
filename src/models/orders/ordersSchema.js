"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrderValidation = exports.Orders = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const joi_1 = __importDefault(require("joi"));
const { Schema, model } = mongoose_1.default;
const orderSchema = new Schema({
    order: [
        {
            dishName: {
                type: String,
                required: [true, "Set name for dish"],
            },
            image: {
                type: String,
                required: true,
            },
            price: {
                type: String,
                required: true,
            },
            number: {
                type: Number,
                required: true,
            },
            shop: {
                type: String,
                required: true,
            },
        },
    ],
    totalPrice: {
        type: String,
        required: true,
    },
    dateOrder: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
});
orderSchema.pre("save", (error, next) => {
    error.status = 400;
    next();
});
exports.Orders = model("Orders", orderSchema);
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
//# sourceMappingURL=ordersSchema.js.map