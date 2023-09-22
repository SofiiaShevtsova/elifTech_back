import { Request, Response, NextFunction } from "express";
import { Trips } from "./trip-schema";
import { ITrips } from "../../types/commons";
import { catchError } from "../../helpers/commons";

export const getOneTrip = async (
  req: Request<{ trip_id: string }>,
  res: Response<ITrips>,
  next: NextFunction
) => {
  try {
    const { trip_id } = req.params;
    const trip = (await Trips.findById(trip_id)) as unknown as ITrips;
    if (!trip) {
      throw catchError(404);
    }
    res.status(200).json(trip);
  } catch (error) {
    next(error);
  }
};

export const getTrips = async (
  req: Request,
  res: Response<ITrips[]>,
  next: NextFunction
) => {
  try {
    const trips = await Trips.find();
    res.status(200).json(trips);
  } catch (error) {
    next(error);
  }
};
