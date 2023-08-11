import express from "express";
import * as NoteController from "../controllers/note.controller";
import Auth from "../middlewares/auth"

const route = express.Router();

route.post('/create', Auth, NoteController.createNote);

export default route;
