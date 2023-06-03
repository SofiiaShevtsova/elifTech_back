const { Users } = require("./userSchema");

const getUser = async (req, res) => {
  try {
    const userFind = await Users.findOne({ ...req });
    if (userFind) {
      return userFind;
    }
  } catch (error) {
    return error;
  }
};

const addUser = async (req, res) => {
  try {
    const { email } = req;
    const userFind = await Users.findOne({ email });
    if (userFind) {
      return userFind;
    }
    const newUser = await Users.create({ ...req });
    return newUser;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getUser,
  addUser,
};
