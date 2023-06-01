const { Users } = require("./userSchema");

const getUser = async (req, res) => {
  const { email } = req;
//   const { page = 1, limit = 5, favorite } = req.query;
//   const skip = (page - 1) * limit;
// const user = {owner}
//   if (favorite !== undefined) {
//   user.favorite = favorite
// }
    const user = await Users.findOne({ email });
    if (user) {
        return user
    }
    const newUser = await Users.create({req})
  return newUser;
};

module.exports = {
  getUser
//   registerUsresSchema,
};

