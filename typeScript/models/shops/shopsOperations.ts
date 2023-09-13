const { ShopsList } = require("./shopsSchema");

const getAllShops = async (req, res) => {
  try {
    const list = await ShopsList.find();
    return list;
  } catch (error) {
    return error;
  }
};

const addShop = async (req, res) => {
  const newShop = await ShopsList.create(req.body);
  return newShop;
};

module.exports = {
  getAllShops,
  addShop,
};
