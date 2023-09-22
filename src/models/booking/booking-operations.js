"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewBooking = exports.getAllBookings = void 0;
const booking_schema_1 = require("./booking-schema");
const commons_1 = require("../../helpers/commons");
const getAllBookings = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        const list = (yield booking_schema_1.Bookings.find({ userId: user._id }, "-createdAt -updatedAt").populate("tripId", "title price image"));
        res.status(200).json(list);
    }
    catch (error) {
        throw (0, commons_1.catchError)(404, error.message);
    }
});
exports.getAllBookings = getAllBookings;
const addNewBooking = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        const user = req.user;
        if (user._id !== userId.toString()) {
            throw (0, commons_1.catchError)(403);
        }
        const newBooking = (yield booking_schema_1.Bookings.create(req.body));
        if (!newBooking) {
            throw (0, commons_1.catchError)(404);
        }
        res.status(201).json(newBooking);
    }
    catch (error) {
        throw (0, commons_1.catchError)(404, error.message);
    }
});
exports.addNewBooking = addNewBooking;
//# sourceMappingURL=booking-operations.js.map