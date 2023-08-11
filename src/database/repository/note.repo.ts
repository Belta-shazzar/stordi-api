import Note from "../models/note.model"

export const create = async (details: Record<string, any>) => {
    return await Note.create(details);
}