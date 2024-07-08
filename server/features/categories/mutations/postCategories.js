const Category = require("../category.model");

const postCategories = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    return res.status(201).send({ message: "Category has been created" });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = postCategories;
