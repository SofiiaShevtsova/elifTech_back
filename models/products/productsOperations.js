const { Products } = require("./productsSchema");

const getProducts = async (req, res) => {
  const { id: shop } = req;
//   const { page = 1, limit = 5, favorite } = req.query;
//   const skip = (page - 1) * limit;
// const user = {owner}
//   if (favorite !== undefined) {
//   user.favorite = favorite
// }
  const list = await Products.find({shop}, "-createdAt -updatedAt");
  return list;
};

module.exports = {
  getProducts
//   registerUsresSchema,
};

