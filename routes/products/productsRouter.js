const express = require("express");
const {
  getProducts,
  addProduct,
} = require("../../models/products/productsOperations");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const product = await addProduct(req);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.get("/:shop_id", async (req, res, next) => {
  try {
    const { shop_id } = req.params;
    const listOfProducts = await getProducts(shop_id);
    res.json(listOfProducts);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
