import * as UserRepo from "../database/repository/user.repo";
import * as NoteRepo from "../database/repository/note.repo";
import search from "../config/puppeteer";

export const createNote = async (params: Record<string, any>) => {
  const { userId, title } = params;

  if (!userId || !title) {
    return { success: false, message: "invalid or missing inputs", data: {} };
  }

  const user = await UserRepo.getUserById(userId);

  if (!user) {
    return { success: false, message: "user not found", data: {} };
  }

  const note = await NoteRepo.create({
    userId,
    title,
    body: params.body,
    bookmarks: params.bookmark
  })

  return {
    success: true,
    message: "",
    data: { note },
  };
};

export const getNotes = async (userId: string) => {
  const user = await UserRepo.getUserById(userId);

  if (!user) {
    return { success: false, message: "user not found", data: {} };
  }

  const notes = await NoteRepo.getNotes(user._id);

  return {
    success: true,
    message: "",
    data: { notes },
  };
}

export const getANotes = async (params: Record<string, any>) => {
  const user = await UserRepo.getUserById(params.userId);

  if (!user) {
    return { success: false, message: "user not found", data: {} };
  }

  const note = await NoteRepo.getByQuery({ userId: params.userId, _id: params.noteId })

  if (!note) {
    return { success: false, message: "note not found", data: {} };
  }

  return {
    success: true,
    message: "",
    data: { note },
  };
}
export async function searchGoogle(query: string) {
  if (!query) {
    return { success: false, message: "search query required", data: {} };
  }

  const searchResult = await search(query);

  return { success: true, message: '', data: { searchResult } };

  console.log(searchResult);
}

