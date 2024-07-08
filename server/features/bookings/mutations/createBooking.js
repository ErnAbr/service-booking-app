const Booking = require("../booking.model");
const Company = require("../../businesses/business.model");

const createBooking = async (req, res) => {
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
};

module.exports = createBooking;
