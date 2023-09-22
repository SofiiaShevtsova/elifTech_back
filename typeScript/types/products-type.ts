import { Types } from "mongoose";

export interface IProducts {
  _id?: string;
  dishName: string;
  image: string;
  price: string;
  quantity: number;
  composition: string[];
  shop: Types.ObjectId;
}
