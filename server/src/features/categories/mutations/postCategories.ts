import Category from "../category.model";
import { RequestHandler } from "express";

export const postCategories: RequestHandler = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    return res.status(201).send({ message: "Category has been created" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
