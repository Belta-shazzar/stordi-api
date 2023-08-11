import mongoose from "mongoose";
import { logger } from "./logging";

const connectDb = () => {
  try {
    mongoose.set("strictQuery", true);
    return mongoose
      .connect(process.env.MONGO_URI!)
      .then((() => logger.info('connected to mongo db server'))
      );
  } catch (error) {
    console.log(error);
  }
};

export default connectDb
