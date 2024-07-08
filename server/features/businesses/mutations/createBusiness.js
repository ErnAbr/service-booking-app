const Business = require("../business.model");

const createBusiness = async (req, res) => {
  try {
    const existingBusiness = await Business.findOne({ email: req.body.email });

    if (existingBusiness) {
      return res.status(409).send({ message: "Company with this email already exists" });
    }

    const company = new Business(req.body);
    await company.save();
    return res.status(201).send({ message: "Company has been created", company });
  } catch (error) {
    if (error.name === "ValidationError") {
      return res.status(400).send({ message: "Validation Error", error: error.message });
    }
    return res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = createBusiness;
