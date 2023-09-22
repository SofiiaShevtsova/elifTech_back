"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bookings = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const commons_1 = require("../../helpers/commons");
const { Schema, model } = mongoose_1.default;
const bookingsSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "UserTravel", required: true },
    tripId: { type: Schema.Types.ObjectId, ref: "Trip", required: true },
    guests: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});
bookingsSchema.post("save", commons_1.mongooseHandleError);
exports.Bookings = model("Bookings", bookingsSchema);
//# sourceMappingURL=booking-schema.js.map