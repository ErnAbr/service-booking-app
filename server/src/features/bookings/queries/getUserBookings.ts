import Booking from "../booking.model";
import { RequestHandler } from "express";

export const getUserBookings: RequestHandler = async (req, res) => {
  try {
    const regex = new RegExp(`^${req.params.email}$`, "i");
    const currentUserEmail = req.currentUser?.email;

    if (currentUserEmail?.toLowerCase() !== req.params.email.toLowerCase()) {
      return res.status(403).send({ message: "Forbidden: Access is denied." });
    }

    const userBookings = await Booking.find({ userEmail: regex });

    res.status(200).send(userBookings);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
