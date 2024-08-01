import Booking from "../booking.model";
import Company from "../../businesses/business.model";
import { RequestHandler } from "express";
import { formatInTimeZone } from "date-fns-tz";

export const createBooking: RequestHandler = async (req, res) => {
  try {
    const { companyId, orderDateTime, userEmail, userName } = req.body;

    if (!companyId || !orderDateTime || !userEmail || !userName) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).send({ message: "Company not found" });
    }

    const timeZone = "Europe/Helsinki";
    const orderDateInTZ = formatInTimeZone(orderDateTime, timeZone, "yyyy-MM-dd'T'HH:mm:ssXXX");

    const existingBooking = await Booking.findOne({ companyId, orderDateTime: orderDateInTZ });
    if (existingBooking) {
      return res
        .status(400)
        .send({ message: "Booking at this time is not possible, please choose another time" });
    }

    await new Booking({ ...req.body, orderDateTime: orderDateInTZ }).save();
    return res.status(201).send({ message: "Booking Successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
