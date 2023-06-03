const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productSchema = new Schema({
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
  composition: {
    type: [{ type: String }],
  },
  shop: {
    type: Schema.Types.ObjectId,
    ref: "ShopsList",
    required: true,
  },
});

productSchema.post("save", (error, data, next) => {
  error.status = 400;
  next();
});

const Products = model("Products", productSchema);

module.exports = {
  Products,
};
