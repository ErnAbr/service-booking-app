const Booking = require("../booking.model");

const getUserBookings = async (req, res) => {
  try {
    const regex = new RegExp(`^${req.params.email}$`, "i");
    const userBookings = await Booking.find({ userEmail: regex });

    if (userBookings.length === 0) {
      return res.status(404).send({ message: "No Orders found" });
    }

    res.status(200).send(userBookings);
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = getUserBookings;
