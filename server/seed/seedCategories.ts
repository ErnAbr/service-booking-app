import mongoose, { ConnectOptions } from "mongoose";
import Category from "../src/features/categories/category.model";
import { categories } from "./categoryData";
import { envVariables } from "../src/config/configEnvVariables";

const seedCategories = async () => {
  try {
    const options: ConnectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions;

    await mongoose.connect(envVariables.db.connection, options);

    await Category.deleteMany({});
    await Category.insertMany(categories);

    console.log("Categories seeded successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding categories:", err);
    mongoose.connection.close();
  }
};

seedCategories();
