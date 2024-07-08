const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

CategorySchema.set("toJSON", {
  transform: function (_, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

module.exports = mongoose.model("category", CategorySchema);
