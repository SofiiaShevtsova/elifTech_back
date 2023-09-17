"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const productSchema = new Schema({
    dishName: {
        type: String,
        required: [true, "Set name for dish"],
    },
    image: {
        type: String,
    },
    price: {
        type: String,
    },
    quantity: {
        type: Number,
    },
    composition: {
        type: [{ type: String }],
    },
    shop: {
        type: Schema.Types.ObjectId,
        ref: "ShopsList",
        required: true,
    },
});
productSchema.post("save", (error, next) => {
    error.status = 400;
    next();
});
exports.Products = model("Products", productSchema);
//# sourceMappingURL=productsSchema.js.map