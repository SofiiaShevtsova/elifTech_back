"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addShopsValidation = exports.ShopsList = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const joi_1 = __importDefault(require("joi"));
const { Schema, model } = mongoose_1.default;
const shopsSchema = new Schema({
    shopName: {
        type: String,
        required: [true, "Set name for shop"],
        unique: true,
    },
    address: {
        type: String,
    },
    logo: {
        type: String,
    },
});
shopsSchema.post("save", (error, next) => {
    error.status = 400;
    next();
});
exports.ShopsList = model("ShopsList", shopsSchema);
exports.addShopsValidation = joi_1.default.object({
    shopName: joi_1.default.string().required(),
    address: joi_1.default.string().required(),
    logo: joi_1.default.string().required(),
});
//# sourceMappingURL=shopsSchema.js.map