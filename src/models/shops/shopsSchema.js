"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopsList = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const commons_1 = require("../../helpers/commons");
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
shopsSchema.post("save", commons_1.mongooseHandleError);
exports.ShopsList = model("ShopsList", shopsSchema);
//# sourceMappingURL=shopsSchema.js.map