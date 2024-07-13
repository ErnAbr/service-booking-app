import Business from "../business.model";
import { RequestHandler } from "express";

export const updateBusiness: RequestHandler = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);

    if (!business) {
      return res.status(404).send({ message: "No business found" });
    }

    const updatedBusiness = await Business.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    return res.status(200).send({ message: "Business updated successfully", updatedBusiness });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
