import Category from "../category.model";
import { RequestHandler } from "express";

export const getCategories: RequestHandler = async (_, res) => {
  try {
    const categories = await Category.find();

    if (categories.length === 0) {
      return res.status(404).send({ message: "No categories found" });
    }

    res.status(200).send(categories);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
