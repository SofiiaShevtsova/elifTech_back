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
exports.getTrips = exports.getOneTrip = void 0;
const trip_schema_1 = require("./trip-schema");
const commons_1 = require("../../helpers/commons");
const getOneTrip = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { trip_id } = req.params;
        const trip = (yield trip_schema_1.Trips.findById(trip_id));
        if (!trip) {
            throw (0, commons_1.catchError)(404);
        }
        res.status(200).json(trip);
    }
    catch (error) {
        next(error);
    }
});
exports.getOneTrip = getOneTrip;
const getTrips = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const trips = yield trip_schema_1.Trips.find();
        res.status(200).json(trips);
    }
    catch (error) {
        next(error);
    }
});
exports.getTrips = getTrips;
//# sourceMappingURL=trip-operations.js.map