"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const { ACCESS_SECRET_KEY } = process.env;
const createToken = (user) => {
    const payload = { id: user._id };
    if (ACCESS_SECRET_KEY) {
        const token = jsonwebtoken_1.default.sign(payload, ACCESS_SECRET_KEY, { expiresIn: "24h" });
        user.token = token;
    }
    return user;
};
exports.createToken = createToken;
//# sourceMappingURL=create-token.js.map