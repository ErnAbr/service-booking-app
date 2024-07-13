import Booking from "../../bookings/booking.model";
import { RequestHandler } from "express";

export const getBookingsByDate: RequestHandler = async (req, res) => {
  try {
    const { businessId, date } = req.params;
    const startDate = new Date(date);
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 1);

    const bookings = await Booking.find({
      companyId: businessId,
      orderDateTime: {
        $gte: startDate,
        $lt: endDate,
      },
    });

    if (bookings.length === 0) {
      return res.status(404).send({ message: "No Bookings Found" });
    }

    return res.status(200).send(bookings);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
