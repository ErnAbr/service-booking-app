import User from "../user.model";
import { generateToken } from "../helpers/generateToken";
import { RequestHandler } from "express";

export const login: RequestHandler = async (req, res) => {
  const { userName, password } = req.body;
  const user = await User.findOne({ userName });
  if (!user || !(await user.isCorrectPassword(password))) {
    return res.status(401).json({ message: "Incorrect User Name or Password" });
  }
  const token = generateToken({ id: user._id, admin: user.admin });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
  });

  return res.status(200).json({ user, message: "Successfully Logged In" });
};
