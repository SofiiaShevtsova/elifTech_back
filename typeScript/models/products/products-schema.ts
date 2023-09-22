import mongoose from "mongoose";
import { IProducts } from '../../types/commons';
import {mongooseHandleError} from '../../helpers/commons'

const { Schema, model } = mongoose;

const productSchema = new Schema<IProducts>({
  dishName: {
    type: String,
    required: [true, "Set name for dish"],
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

productSchema.post("save", mongooseHandleError);

export const Products = model<IProducts>("Products", productSchema);
