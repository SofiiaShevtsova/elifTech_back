const { Products } = require("./productsSchema");

const getProducts = async (id) => {
  const list = await Products.find({ shop: id }, "-createdAt -updatedAt");
  return list;
};

const addProduct = async (req, res) => {
    const product = await Products.create({...req.body});
  return product;

}

module.exports = {
  getProducts,
  addProduct
};

