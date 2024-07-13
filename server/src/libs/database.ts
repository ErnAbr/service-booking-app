import mongoose from "mongoose";
import { envVariables } from "../config/configEnvVariables";

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(envVariables.db.connection);
    // eslint-disable-next-line no-console
    console.log("Connected to the database");
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
  }
};
