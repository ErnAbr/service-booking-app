import { RequestHandler } from "express";
import { generateToken } from "../helpers/generateToken";
import User from "../user.model";

export const updateUser: RequestHandler = async (req, res) => {
  try {
    const { id, userName, email, ...rest } = req.body;

    const existingUserByUserName = await User.findOne({ userName, _id: { $ne: id } });
    if (existingUserByUserName) {
      return res.status(400).json({ message: "Username is already taken by another user" });
    }
    const existingUserByEmail = await User.findOne({ email, _id: { $ne: id } });
    if (existingUserByEmail) {
      return res.status(400).json({ message: "Email is already taken by another user" });
    }

    const user = await User.findByIdAndUpdate(id, { userName, email, ...rest }, { new: true });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const token = generateToken({ id: user._id, admin: user.admin, email: user.email });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
    });

    return res.status(200).json({ user, message: "User updated successfully", token });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ message: "Error updating user." });
  }
};
