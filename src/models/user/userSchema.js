"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const commons_1 = require("../../helpers/commons");
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
userSchema.post("save", commons_1.mongooseHandleError);
exports.Users = model("Users", userSchema);
//# sourceMappingURL=userSchema.js.map