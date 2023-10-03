import jwt from "jsonwebtoken";
import { Flag } from "../util";

export interface Payload {
  userId: string;
  flag: Flag;
}

export async function generateToken(userId: string, flag: Flag) {
  try {
    const payload: Payload = {
      userId,
      flag,
    };

    const token = jwt.sign(payload, process.env.SECRET!, { expiresIn: "72h" });

    return token;
  } catch (error) {
    console.log(error);
  }
}

export async function decodeToken(token: string) {
  try {    
    const payload = jwt.verify(token, process.env.SECRET!);

    return payload;
  } catch (error) {
    console.log(error);
  }
}
