const mongoose = require("mongoose");
const Joi = require("joi");

const { Schema, model } = mongoose;

const orderSchema = new Schema({
  order: [
    {
      dishName: {
        type: String,
        required: [true, "Set name for dish"],
      },
      image: {
        type: String,
        required: true,
      },
      price: {
        type: String,
        required: true,
      },
      number: {
        type: Number,
        required: true,
      },
      shop: {
        type: String,
        required: true,
      },
    },
  ],
  totalPrice: {
    type: String,
    required: true,
  },
  dateOrder: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
});

orderSchema.post("save", (error, data, next) => {
  error.status = 400;
  next();
});

const Orders = model("Orders", orderSchema);

const addOrderValidation = Joi.object({
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

module.exports = {
  Orders,
  addOrderValidation,
};
