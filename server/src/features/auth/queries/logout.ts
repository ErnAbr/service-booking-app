import { RequestHandler } from "express";

export const logout: RequestHandler = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
  });
  return res.status(200).json({ message: "Successfully logged out" });
};
