import { toZonedTime } from "date-fns-tz";
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

    const helsinkiTimeZone = "Europe/Helsinki";
    const formattedBookings = userBookings.map((booking) => {
      const zonedDateTime = toZonedTime(booking.orderDateTime, helsinkiTimeZone);

      const offsetDate = new Date(
        zonedDateTime.getTime() - zonedDateTime.getTimezoneOffset() * 60000,
      );

      return {
        ...booking.toObject(),
        orderDateTime: offsetDate,
      };
    });

    res.status(200).send(formattedBookings);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
