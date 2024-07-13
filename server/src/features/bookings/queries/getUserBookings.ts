import Booking from "../booking.model";
import { RequestHandler } from "express";

export const getUserBookings: RequestHandler = async (req, res) => {
  try {
    const regex = new RegExp(`^${req.params.email}$`, "i");
    const userBookings = await Booking.find({ userEmail: regex });

    if (userBookings.length === 0) {
      return res.status(404).send({ message: "No Bookings found" });
    }

    res.status(200).send(userBookings);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
