import jwt from "jsonwebtoken";
import { Flag } from "../util";

export async function generateToken(userId: string, flag: Flag) {
  try {
    const payload = {
      userId,
      flag,
    };

    const token = jwt.sign(payload, process.env.SECRET!, { expiresIn: "24h" });

    return token;
  } catch (error) {
    console.log(error);
  }
}
