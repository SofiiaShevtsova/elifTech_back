import Joi from "joi";

export const registerUserSchema = Joi.object({
  fullName: Joi.string()
    .pattern(/^[a-z,A-Z,0-9, ,-]+$/)
    .min(2)
    .max(30)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().min(3).max(20).required(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    .required(),
  password: Joi.string().min(3).max(20).required(),
});
