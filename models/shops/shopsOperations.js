const { ShopsList } = require("./shopsSchema");

const getAllShops = async (req, res) => {
//   const { _id: owner } = req.user;
//   const { page = 1, limit = 5, favorite } = req.query;
//   const skip = (page - 1) * limit;
// const user = {owner}
//   if (favorite !== undefined) {
//   user.favorite = favorite
// }
  const list = await ShopsList.find();
  return list;
};

module.exports = {
  getAllShops
//   registerUsresSchema,
};

