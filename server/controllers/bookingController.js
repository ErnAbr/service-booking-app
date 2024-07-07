const express = require("express");
const router = express.Router();
const Booking = require("../models/booking.model");
const Company = require("../models/company.model");
const isValidObjectId = require("../middleware/isValidObjectId");

router.get("/user/:email", async (req, res) => {
  try {
    const regex = new RegExp(`^${req.params.email}$`, "i");
    const userBookings = await Booking.find({ userEmail: regex });

    if (userBookings.length === 0) {
      return res.status(404).send({ message: "No Orders found" });
    }

    res.send(200, userBookings);
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { companyId, orderDateTime, userEmail, userName } = req.body;

    if (!companyId || !orderDateTime || !userEmail || !userName) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).send({ message: "Company not found" });
    }

    const savedBooking = await new Booking(req.body).save();
    return res.status(201).send(savedBooking);
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
});

router.delete("/:id", isValidObjectId, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).send({ message: "Order not found" });
    }

    await Booking.deleteOne({ _id: req.params.id });
    return res.status(200).send({ message: "Order deleted successfully" });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
});

module.exports = router;
