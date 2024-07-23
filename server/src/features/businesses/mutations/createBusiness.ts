import Business from "../business.model";
import { RequestHandler } from "express";

export const createBusiness: RequestHandler = async (req, res) => {
  try {
    const existingBusiness = await Business.findOne({ email: req.body.email });

    if (existingBusiness) {
      return res.status(409).send({ message: "Company with this email already exists" });
    }

    const company = new Business(req.body);
    await company.save();
    return res.status(201).send({ message: "Company has been created", company });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
