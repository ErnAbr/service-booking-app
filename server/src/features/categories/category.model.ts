import mongoose, { Document, Schema } from "mongoose";

interface ICategory extends Document {
  categoryName: string;
  backgroundColor: string;
  imageUrl: string;
}

const CategorySchema = new mongoose.Schema<ICategory>({
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

const Category = mongoose.model<ICategory>("category", CategorySchema);

export default Category;
