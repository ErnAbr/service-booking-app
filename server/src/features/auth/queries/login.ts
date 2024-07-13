import User from "../user.model";
import { generateToken } from "../helpers/generateToken";
import { RequestHandler } from "express";

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.isCorrectPassword(password))) {
    return res.status(401).json({ message: "Incorrect email or password" });
  }
  const token = generateToken({ id: user._id });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
  });

  return res.status(200).json({ token, user });
};
