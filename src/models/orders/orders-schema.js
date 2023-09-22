"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const commons_1 = require("../../helpers/commons");
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
orderSchema.post("save", commons_1.mongooseHandleError);
exports.Orders = model("Orders", orderSchema);
//# sourceMappingURL=orders-schema.js.map