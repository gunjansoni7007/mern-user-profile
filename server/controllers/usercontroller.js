// server/controllers/userController.js

const User = require("../models/User");

// Save new user
const saveUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ message: "User saved successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Check username availability
const checkUsername = async (req, res) => {
  try {
    const { username } = req.query;
    const user = await User.findOne({ username });
    res.json({ available: !user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { saveUser, checkUsername };
