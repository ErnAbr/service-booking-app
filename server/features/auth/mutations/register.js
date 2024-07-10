const User = require("../user.model");

const register = async (req, res) => {
  try {
    const user = req.body;
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User(user);
    await newUser.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error registering new user.", error: error.message });
  }
};

module.exports = register;
