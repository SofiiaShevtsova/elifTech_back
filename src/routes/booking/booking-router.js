"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commons_1 = require("../../helpers/commons");
const booking_operations_1 = require("../../models/booking/booking-operations");
const commons_2 = require("../../middlewares/commons");
const commons_3 = require("../../validation-schemas/commons");
const router = express_1.default.Router();
router.post("/", commons_2.authenticate, (0, commons_2.validateBody)(commons_3.addBookingValidation), (0, commons_1.ctrlWrapper)(booking_operations_1.addNewBooking));
router.get("/", commons_2.authenticate, (0, commons_1.ctrlWrapper)(booking_operations_1.getAllBookings));
router.delete("/:booking_id", commons_2.authenticate, (0, commons_1.ctrlWrapper)(booking_operations_1.removeBooking));
exports.default = router;
//# sourceMappingURL=booking-router.js.map