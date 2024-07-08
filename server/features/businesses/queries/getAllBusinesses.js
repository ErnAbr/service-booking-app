const Business = require("../business.model");

const getAllBusinesses = async (_, res) => {
  try {
    const businesses = await Business.find();

    if (businesses.length === 0) {
      return res.status(404).send({ message: "No businesses found" });
    }

    res.status(200).send(businesses);
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = getAllBusinesses;
