"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trips = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const commons_1 = require("../../helpers/commons");
const { Schema, model } = mongoose_1.default;
const tripsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});
tripsSchema.post("save", commons_1.mongooseHandleError);
exports.Trips = model("Trips", tripsSchema);
//# sourceMappingURL=trip-schema.js.map