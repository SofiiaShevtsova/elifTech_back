import Joi from "joi";

export const addShopsValidation = Joi.object({
  shopName: Joi.string().required(),
  address: Joi.string().required(),
  logo: Joi.string().required(),
});
