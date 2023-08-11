import { Response } from "express";
import * as NoteService from "../services/note.service";

export const createNote = async (req: any, res: Response) => {
  try {
    const { success, message, data } = await NoteService.createNote({ ...req.user, ...req.body });
    return res.status(200).json({ success, message, data });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, message: "could not resolve request" });
  }
};
