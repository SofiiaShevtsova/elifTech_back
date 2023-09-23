import express from "express";
import { ctrlWrapper } from "../../helpers/commons";
import {
  getAllBookings,
  addNewBooking,
  removeBooking,
} from "../../models/booking/booking-operations";
import { authenticate, validateBody } from "../../middlewares/commons";
import { addBookingValidation } from "../../validation-schemas/commons";

const router = express.Router();

router.post(
  "/",
  authenticate,
  validateBody(addBookingValidation),
  ctrlWrapper(addNewBooking)
);

router.get("/", authenticate, ctrlWrapper(getAllBookings));

router.delete("/:booking_id", authenticate, ctrlWrapper(removeBooking));

export default router;
