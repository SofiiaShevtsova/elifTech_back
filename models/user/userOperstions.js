const { Users } = require("./userSchema");

const getUser = async (req, res) => {
  try {
  const { email } = req;
    const user = await Users.findOne({ email });
    if (user) {
        return user
    }
  const newUser = await Users.create({ ...req })
  return newUser;
  } catch (error) {
    return error
  }
};

module.exports = {
  getUser
//   registerUsresSchema,
};

