const User = require("../models/user");

exports.registerUser = async (req, res) => {
  const { name, email, role } = req.body;

  try {
    const user = await User.create({ name, email, role });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(401).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
