const { ShopsList } = require("./shopsSchema");

const getAllShops = async (req, res) => {
  const list = await ShopsList.find();
  return list;
};

const addShop = async (req, res) => {
  const newShop = await ShopsList.create(req.body);
  return newShop;
};

module.exports = {
  getAllShops,
  addShop,
};
