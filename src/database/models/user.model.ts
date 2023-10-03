import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      trim: true,
      required: true
    },
    lastname: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    emailVerifiedAt: {
      type: Date,
    },
    password: {
      type: String,
    },
    googleId: {
      type: String
    }
  },
  { timestamps: true },
);

UserSchema.pre("save", async function (this: any) {
  if (this.isNew) {
    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_GENSALT!));
    this.password = await bcrypt.hash(this.password, salt)
  }
})

export default mongoose.model("User", UserSchema);
