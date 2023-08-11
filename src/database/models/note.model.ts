import mongoose, { Schema } from "mongoose";
import User from "./user.model";

const NoteSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: User,
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
