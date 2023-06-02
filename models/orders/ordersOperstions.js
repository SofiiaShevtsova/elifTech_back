const { Orders } = require("./ordersSchema");
const { getUser } = require("../user/userOperstions");

const getAllOrders = async (req, res) => {
  try {
  const { email } = req;
  const owner = await getUser(email);
  const list = await Orders.find({ owner }, "-createdAt -updatedAt");
  return list;
  } catch (error) {
    return error
  }
};

const addNewOrder = async (req, res) => {
  try {
  const { email, name, phone, address, order, totalPrice, dateOrder } = req;
  const owner = await getUser({ email, name, phone, address });
  const list = await Orders.create({ owner, order, totalPrice, dateOrder });
  return list;
  } catch (error) {
    return error
  }
};

module.exports = {
  addNewOrder,
  getAllOrders,
};
