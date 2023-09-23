import { NextFunction, Request, Response } from "express";
import { Bookings } from "./booking-schema";
import { IBookings, TMessage } from "../../types/commons";
import { catchError } from "../../helpers/commons";

export const getAllBookings = async (
  req: Request,
  res: Response<IBookings[]>,
  next: NextFunction
) => {
  try {
    const user = req.user;
    const list = (await Bookings.find(
      { userId: user._id.toString() },
      "-createdAt -updatedAt"
    ).populate("tripId", "title price image")) as unknown as IBookings[];
    res.status(200).json(list);
  } catch (error: any) {
    throw catchError(404, error.message);
  }
};

export const addNewBooking = async (
  req: Request<{}, {}, IBookings>,
  res: Response<IBookings>,
  next: NextFunction
): Promise<void> => {
  try {
    const { userId } = req.body;
    const user = req.user;

    if (user._id.toString() !== userId.toString()) {
      throw catchError(403);
    }
    const newBooking = (await Bookings.create(
      req.body
    )) as unknown as IBookings;
    if (!newBooking) {
      throw catchError(404);
    }
    res.status(201).json(newBooking);
  } catch (error: any) {
    throw catchError(404, error.message);
  }
};

export const removeBooking = async (
  req: Request<{ booking_id: string }>,
  res: Response<TMessage>,
  next: NextFunction
): Promise<void> => {
  try {
    const { booking_id } = req.params;
    const user = req.user;
    const booking = await Bookings.findById(booking_id);
    if (booking) {
      if (user._id.toString() !== booking.userId.toString()) {
        throw catchError(403);
      }
      await Bookings.findByIdAndRemove(booking_id);
      res.status(201).json({ message: "Delete success!" });
    } else {
      throw catchError(404);
    }
  } catch (error: any) {
    throw catchError(404, error.message);
  }
};
