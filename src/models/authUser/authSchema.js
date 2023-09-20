"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTravel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const userSchema = new Schema({
    fullName: {
        type: String,
        required: [true, "Set name for contact"],
    },
    password: {
        type: String,
        required: [true, "Set password for user"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    token: {
        type: String,
        default: "",
    },
});
userSchema.post("save", (error, next) => {
    error.status = 400;
    next();
});
exports.UserTravel = model("User", userSchema);
//# sourceMappingURL=authSchema.js.map