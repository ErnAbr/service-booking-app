import mongoose, { ConnectOptions } from "mongoose";
import Business from "../src/features/businesses/business.model";
import { companies } from "./companyData";
import { envVariables } from "../src/config/configEnvVariables";

const seedBusinesses = async () => {
  try {
    const options: ConnectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions;

    await mongoose.connect(envVariables.db.connection, options);

    await Business.deleteMany({});
    await Business.insertMany(companies);

    console.log("Businesses seeded successfully");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding businesses:", err);
    mongoose.connection.close();
    process.exit(1);
  }
};

seedBusinesses();
