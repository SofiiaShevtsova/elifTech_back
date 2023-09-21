import express from "express";
import {
  getProducts,
  addProduct,
} from "../../models/products/productsOperations";
import { ctrlWrapper } from "../../helpers/ctrl-wrapper";

const router = express.Router();

router.post(
  "/",
  ctrlWrapper(addProduct)
);

router.get(
  "/:shop_id",
 ctrlWrapper(getProducts)
);

export default router;
