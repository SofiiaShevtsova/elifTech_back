import express from "express";
import { ctrlWrapper } from "../../helpers/commons";
import { getTrips, getOneTrip } from "../../models/trip/trip-operations";

const router = express.Router();

router.get("/", ctrlWrapper(getTrips));

router.get("/:trip_id", ctrlWrapper(getOneTrip));

export default router;
