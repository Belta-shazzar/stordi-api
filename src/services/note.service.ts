import * as UserRepo from "../database/repository/user.repo";
import * as NoteRepo from "../database/repository/note.repo";

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
