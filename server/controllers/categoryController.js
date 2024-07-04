const express = require("express");
const router = express.Router();
const Category = require("../models/category.model");

router.get("/", async (_, res) => {
  try {
    const categories = await Category.find();

    if (categories.length === 0) {
      return res.status(404).send({ message: "No categories found" });
    }

    res.send(200, categories);
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const existingCategory = await Category.findOne({ name: req.body.cateogryName });

    if (existingCategory) {
      return res.status(400).send({ message: "Category already exists" });
    }

    const category = new Category(req.body);
    await category.save();
    return res.status(201).send({ message: "Category has been created" });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
});

module.exports = router;
