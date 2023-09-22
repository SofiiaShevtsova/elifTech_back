"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addShopsValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.addShopsValidation = joi_1.default.object({
    shopName: joi_1.default.string().required(),
    address: joi_1.default.string().required(),
    logo: joi_1.default.string().required(),
});
//# sourceMappingURL=shops-validation.js.map