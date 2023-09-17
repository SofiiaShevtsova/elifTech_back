"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserValidation = exports.Users = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const joi_1 = __importDefault(require("joi"));
const { Schema, model } = mongoose_1.default;
const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Set name"],
    },
    email: {
        type: String,
        required: [true, "Set email"],
        unique: true,
    },
    phone: {
        type: String,
        required: [true, "Set phone"],
        unique: true,
    },
    address: {
        type: String,
        required: [true, "Set address"],
    },
});
userSchema.post("save", (error, next) => {
    error.status = 400;
    next();
});
exports.Users = model("Users", userSchema);
exports.addUserValidation = joi_1.default.object({
    name: joi_1.default.string().max(30).required(),
    email: joi_1.default.string().email().required(),
    phone: joi_1.default.string().required(),
    address: joi_1.default.string().required(),
});
//# sourceMappingURL=userSchema.js.map