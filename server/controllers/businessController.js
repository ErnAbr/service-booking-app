const express = require("express");
const router = express.Router();
const Business = require("../models/company.model");
const isValidObjectId = require("../middleware/isValidObjectId");

router.get("/", async (_, res) => {
  try {
    const businesses = await Business.find();

    if (businesses.length === 0) {
      return res.status(404).send({ message: "No businesses found" });
    }

    res.send(200, businesses);
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
});

router.get("/category/:category", async (req, res) => {
  try {
    const regex = new RegExp(`^${req.params.category}$`, "i");
    const businessesByCategory = await Business.find({ category: regex });

    if (businessesByCategory.length === 0) {
      return res.status(404).send({ message: "No businesses found" });
    }

    res.send(200, businessesByCategory);
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
});

router.get("/:id", isValidObjectId, async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) {
      return res.status(404).send({ message: "No business found" });
    }
    res.status(200).send(business);
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
});

router.post("/", async (req, res) => {
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
});

router.put("/:id", isValidObjectId, async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);

    if (!business) {
      return res.status(404).send({ message: "No business found" });
    }

    const updatedBusiness = await Business.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    return res.status(200).send({ message: "Business updated successfully", updatedBusiness });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
});

module.exports = router;
