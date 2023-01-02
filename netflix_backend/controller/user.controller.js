const User = require("../models/user");

const userCreate = async (req, res) => {
  const data = await User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  if (data) return res.status(200).json({ data });
  return res.send("sorry try again");
};
const login = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  return res.send(user);
};

module.exports = {
  userCreate,
  login,
};
