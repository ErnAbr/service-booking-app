import Booking from "../../bookings/booking.model";
import { RequestHandler } from "express";

export const getBookingsByDate: RequestHandler = async (req, res) => {
  try {
    const { businessId, date } = req.params;
    const startDate = new Date(date);
    const endDate = new Date(date);
    const bookedTimes: string[] = [];
    endDate.setDate(endDate.getDate() + 1);

    const bookings = await Booking.find({
      companyId: businessId,
      orderDateTime: {
        $gte: startDate,
        $lt: endDate,
      },
    });

    bookings.forEach((booking) => {
      const orderDateTime = new Date(booking.orderDateTime);
      const localTime = orderDateTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Europe/Helsinki",
      });
      bookedTimes.push(localTime);
    });

    return res.status(200).send(bookedTimes);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
