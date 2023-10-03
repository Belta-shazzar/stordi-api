import mongoose, { Schema } from "mongoose";
import User from "./user.model";
import Category from "./category.model";

const NoteSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: User,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: Category,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      trim: true
    },
    bookmarks: {
      type: Array,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Note", NoteSchema);
