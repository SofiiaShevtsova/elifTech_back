const mongoose = require("mongoose");
const Joi = require("joi");

const { Schema, model } = mongoose;

const shopsSchema = new Schema({
  shopName: {
    type: String,
    required: [true, "Set name for shop"],
    unique: true,
  },
  address: {
    type: String,
  },
  logo: {
    type: String,
  },
});

shopsSchema.post("save", (error, data, next) => {
  error.status = 400;
  next();
});

const ShopsList = model("ShopsList", shopsSchema);

const addShopsValidation = Joi.object({
  shopName: Joi.string().required(),
  address: Joi.string().required(),
  logo: Joi.string().required(),
});

module.exports = {
  ShopsList,
  addShopsValidation,
};
