import express from "express";
import * as NoteController from "../controllers/note.controller";
import Auth from "../middlewares/auth"

const route = express.Router();

route.post('/create', Auth, NoteController.createNote);
route.get('/notes', Auth, NoteController.getNotes)
route.get('/search', NoteController.searchGoogle)
route.get('/:id', Auth, NoteController.getANote)

export default route;
