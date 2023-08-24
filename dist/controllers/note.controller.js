"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchGoogle = exports.getANote = exports.getNotes = exports.createNote = void 0;
const NoteService = __importStar(require("../services/note.service"));
const createNote = async (req, res) => {
    try {
        const { success, message, data } = await NoteService.createNote({ ...req.user, ...req.body });
        return res.status(200).json({ success, message, data });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "could not resolve request" });
    }
};
exports.createNote = createNote;
const getNotes = async (req, res) => {
    try {
        const { success, message, data } = await NoteService.getNotes(req.user.userId);
        return res.status(200).json({ success, message, data });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "could not resolve request" });
    }
};
exports.getNotes = getNotes;
const getANote = async (req, res) => {
    try {
        const { success, message, data } = await NoteService.getANotes({ userId: req.user.userId, noteId: req.params.id });
        return res.status(200).json({ success, message, data });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "could not resolve request" });
    }
};
exports.getANote = getANote;
const searchGoogle = async (req, res) => {
    try {
        const { success, message, data } = await NoteService.searchGoogle(req.query.search);
        return res.status(200).json({ success, message, data });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "could not resolve request" });
    }
};
exports.searchGoogle = searchGoogle;
