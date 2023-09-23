"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commons_1 = require("../../helpers/commons");
const trip_operations_1 = require("../../models/trip/trip-operations");
const authenticate_user_1 = require("../../middlewares/authenticate-user");
const router = express_1.default.Router();
router.get("/", authenticate_user_1.authenticate, (0, commons_1.ctrlWrapper)(trip_operations_1.getTrips));
router.get("/:trip_id", authenticate_user_1.authenticate, (0, commons_1.ctrlWrapper)(trip_operations_1.getOneTrip));
exports.default = router;
//# sourceMappingURL=trips-router.js.map