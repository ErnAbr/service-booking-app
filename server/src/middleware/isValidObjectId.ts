import mongoose from "mongoose";
import { RequestHandler } from "express";

export const isValidObjectId: RequestHandler = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid ID format" });
  }
  next();
};
