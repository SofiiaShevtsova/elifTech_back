const mongoose = require("mongoose");
// const Joi = require("joi");

const { Schema, model } = mongoose;

const orderSchema = new Schema({
  dishName: {
    type: String,
    required: [true, "Set name for dish"],
    unique: true,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  shop: {
    type: String,
    },
    dataOrder: {
      type: String,
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

module.exports = {
  Orders,
};
