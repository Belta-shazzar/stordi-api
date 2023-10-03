import express from "express";
import * as NoteController from "../controllers/note.controller";
import Auth from "../middlewares/auth"

const route = express.Router();

route.get('/', Auth, NoteController.getNotes)
route.post('/create/:categoryId', Auth, NoteController.createNote);
route.get('/search', NoteController.searchGoogle)
route.get('/category/:id', Auth, NoteController.getByCategory);
route.get('/:id', Auth, NoteController.getANote)
// update notes
// delete notes

export default route;
