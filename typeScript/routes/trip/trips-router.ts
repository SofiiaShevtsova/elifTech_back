import express from "express";
import { ctrlWrapper } from "../../helpers/commons";
import { getTrips, getOneTrip } from "../../models/trip/trip-operations";
import { authenticate } from "../../middlewares/authenticate-user";

const router = express.Router();

router.get("/", authenticate, ctrlWrapper(getTrips));

router.get("/:trip_id",authenticate, ctrlWrapper(getOneTrip));

export default router;
