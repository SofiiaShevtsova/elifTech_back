import express from "express";
import { ctrlWrapper } from "../../helpers/commons";
import {
    getAllBookings,
    addNewBooking
} from "../../models/booking/booking-operations";
import { validateBody } from "../../middlewares/commons";
import { addBookingValidation } from "../../validation-schemas/commons";

const router = express.Router();

router.post("/", validateBody(addBookingValidation), ctrlWrapper(addNewBooking));

router.get("/", ctrlWrapper(getAllBookings));

export default router;
