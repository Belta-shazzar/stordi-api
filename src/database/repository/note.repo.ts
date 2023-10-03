import mongoose, { Types } from "mongoose";
import Note from "../models/note.model";

export const create = async (details: Record<string, any>) => {
  return await Note.create(details);
};

export const getNotes = async (userId: Types.ObjectId) => {
    return await Note.find({ userId })
};

export const getByQuery = async (params: Record<string, any>) => {
    return await Note.findOne(params);
}

export const getManyByQuery = async (params: Record<string, any>) => {
  return await Note.find(params);
}