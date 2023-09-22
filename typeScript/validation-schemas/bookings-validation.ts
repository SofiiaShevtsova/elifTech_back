import Joi from "joi";

export const addBookingValidation = Joi.object({
  order: Joi.array().items(
    Joi.object({
      dishName: Joi.string().required(),
      image: Joi.string().required(),
      price: Joi.string().required(),
      number: Joi.number().required(),
      shop: Joi.string().required(),
    })
  ),
  totalPrice: Joi.string().required(),
  dateOrder: Joi.string().required(),
  name: Joi.string().max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
});
