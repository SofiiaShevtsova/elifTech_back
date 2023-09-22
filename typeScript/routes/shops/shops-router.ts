import express from "express";
import { getAllShops, addShop } from "../../models/shops/shops-operations";
import { addShopsValidation } from "../../validation-schemas/commons";
import { IShops } from "../../types/commons";
import { validateBody } from "../../middlewares/commons";
import { ctrlWrapper } from "../../helpers/commons";

const router = express.Router();

router.post("/", validateBody(addShopsValidation), ctrlWrapper(addShop));

router.get("/allShops", ctrlWrapper(getAllShops));

export default router;
