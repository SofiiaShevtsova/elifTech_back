const mongoose = require("mongoose");
const Joi = require("joi");

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name"],
  },
  email: {
    type: String,
    required: [true, "Set email"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Set phone"],
    unique: true,
  },
  address: {
    type: String,
    required: [true, "Set address"],
  },
});

userSchema.post("save", (error, data, next) => {
  error.status = 400;
  next();
});

const Users = model("Users", userSchema);

const addUserValidation = Joi.object({
  name: Joi.string().max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  address: Joi.string().required(),
});

module.exports = {
  Users,
  addUserValidation,
};
