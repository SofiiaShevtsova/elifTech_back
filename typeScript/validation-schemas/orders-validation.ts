import Joi from "joi";

export const addOrderValidation = Joi.object({
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
  owner: Joi.any(),
});
