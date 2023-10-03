import mongoose, { Schema } from "mongoose";
import User from "./user.model";

const CategorySchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: User,
      required: true
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true },
);

export default mongoose.model("Category", CategorySchema);
