import { Types } from "mongoose";
import User from "../models/user.model";

export const create = async (details: Record<string, any>) => {
  return await User.create({ ...details });
};

export const getUserById = async (userId: string) => {
  const user = await User.findById(userId);
  return user;
};

export const getUserByEmail = async (email: string) => {
  return await User.findOne({ email });
};

export const getByGoogleID = async (googleId: string) => {
  return await User.findOne({ googleId });
};
