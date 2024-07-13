import Booking from "../booking.model";
import { RequestHandler } from "express";

export const deleteBooking: RequestHandler = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).send({ message: "Order not found" });
    }

    await Booking.deleteOne({ _id: req.params.id });
    return res.status(200).send({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
