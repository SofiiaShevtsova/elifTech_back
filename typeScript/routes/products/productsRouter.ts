import express from 'express';
import {
  getProducts,
  addProduct,
} from "../../models/products/productsOperations";

const router = express.Router();

router.post("/", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const product = await addProduct(req);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.get("/:shop_id", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const { shop_id } = req.params;
    const listOfProducts = await getProducts(shop_id);
    res.json(listOfProducts);
  } catch (error) {
    next(error);
  }
});

export default router;
