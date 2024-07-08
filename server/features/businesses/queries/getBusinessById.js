const Business = require("../business.model");

const getBusinessById = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) {
      return res.status(404).send({ message: "No business found" });
    }
    res.status(200).send(business);
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = getBusinessById;
