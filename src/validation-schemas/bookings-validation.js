"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBookingValidation = void 0;
const joi_1 = __importDefault(require("joi"));
exports.addBookingValidation = joi_1.default.object({
    userId: joi_1.default.string().required(),
    tripId: joi_1.default.string().required(),
    guests: joi_1.default.number().required(),
    date: joi_1.default.string().required(),
    totalPrice: joi_1.default.number().required(),
});
//# sourceMappingURL=bookings-validation.js.map