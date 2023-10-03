import { Response } from "express";
import * as NoteService from "../services/note.service";

export const createNote = async (req: any, res: Response) => {
  try {
    const { success, message, data } = await NoteService.createNote({
      ...req.user,
      ...req.body,
      categoryId: req.params.categoryId
    });
    return res.status(200).json({ success, message, data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "could not resolve request" });
  }
};

export const getNotes = async (req: any, res: Response) => {
  try {
    const { success, message, data } = await NoteService.getNotes(req.user.userId);
    return res.status(200).json({ success, message, data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "could not resolve request" });
  }
};

export const getANote = async (req: any, res: Response) => {
  try {
    const { success, message, data } = await NoteService.getANotes({
      userId: req.user.userId,
      noteId: req.params.id,
    });
    return res.status(200).json({ success, message, data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "could not resolve request" });
  }
};

export const getByCategory = async (req: any, res: Response) => {
  try {
    const { success, message, data } = await NoteService.getByCategory({
      userId: req.user.userId,
      categoryId: req.params.id,
    });
    return res.status(200).json({ success, message, data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "could not resolve request" });
  }
}

export const searchGoogle = async (req: any, res: Response) => {
  // try {
  //   const { success, message, data } = await NoteService.searchGoogle(req.query.search);

  //   return res.status(200).json({ success, message, data });
  // } catch (error) {
  //   console.log(error);
  //   return res.status(500).json({ success: false, message: "could not resolve request" });
  // }
};
