const Category = require("../category.model");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();

    if (categories.length === 0) {
      return res.status(404).send({ message: "No categories found" });
    }

    res.send(200, categories);
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = getCategories;
