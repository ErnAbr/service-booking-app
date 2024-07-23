import Business from "../business.model";
import { RequestHandler } from "express";

export const getBusinessesByCategory: RequestHandler = async (req, res) => {
  try {
    const regex = new RegExp(`^${req.params.category}$`, "i");
    const businessesByCategory = await Business.find({ category: regex });

    if (businessesByCategory.length === 0) {
      return res.status(404).send({ message: "No businesses found" });
    }

    res.status(200).send(businessesByCategory);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
