const { Orders } = require("./ordersSchema");
const {getUser} = require("../user/userOperstions")

const getAllOrders = async (req, res) => {
      const { email } = req;

    const owner = getUser(email)

    const list = await Orders.find({ owner }, "-createdAt -updatedAt");
  return list;
};

const addNewOrder = async (req, res) => {
      const { email } = req;

    const owner = getUser(email)
    // --------знайти користувача в базі даних по емейл(якщо немає реєструємо) і додаємо замовленя до базт даних
  const list = await Orders.create({owner})
  return list;
};

module.exports = {
    addNewOrder,
    getAllOrders
//   registerUsresSchema,
};

