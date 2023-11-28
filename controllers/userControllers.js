const User = require("../models/UserModal");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    if (users.length > 0) {
      res.json({ users });
    } else {
      res.json({ status: "no users found " });
    }
  } catch (error) {
    res.json({ status: "internal server error" });
  }
};

const registerUser = async (req, res) => {
  const { fName, lName, email } = req.body;

  try {
    const newUser = await User.create({ fName, lName, email });
    res.json({ status: "user saved", newUser });
  } catch (error) {
    res.json({ status: "user not saved" });
  }
};

module.exports = { getAllUser, registerUser };
