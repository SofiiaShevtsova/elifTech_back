import Joi, { string } from "joi";

export const addBookingValidation = Joi.object({
  userId: Joi.string().required(),
  tripId: Joi.string().required(),
  guests: Joi.number().required(),
  date: Joi.string().required(),
  totalPrice: Joi.number().required(),
});
