import mongoose from "mongoose";
import express from "express";
import { IShops } from "../../types/commons";
import {mongooseHandleError} from '../../helpers/commons'

const { Schema, model } = mongoose;

const shopsSchema = new Schema<IShops>({
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

shopsSchema.post("save", mongooseHandleError);

export const ShopsList = model<IShops>("ShopsList", shopsSchema);
