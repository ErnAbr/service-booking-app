import User from "../user.model";
import { RequestHandler } from "express";

export const register: RequestHandler = async (req, res) => {
  try {
    const user = req.body;

    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      return res.status(400).json({ message: "email already exists" });
    }

    const existingUserByUserName = await User.findOne({ userName: user.userName });
    if (existingUserByUserName) {
      return res.status(400).json({ message: "User with this username already exists" });
    }
    const newUser = new User(user);
    await newUser.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering new user:", error);
    return res.status(500).json({ message: "Error registering new user." });
  }
};
