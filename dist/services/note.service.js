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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchGoogle = exports.getANotes = exports.getNotes = exports.createNote = void 0;
const UserRepo = __importStar(require("../database/repository/user.repo"));
const NoteRepo = __importStar(require("../database/repository/note.repo"));
const puppeteer_1 = __importDefault(require("../config/puppeteer"));
const createNote = async (params) => {
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
    });
    return {
        success: true,
        message: "",
        data: { note },
    };
};
exports.createNote = createNote;
const getNotes = async (userId) => {
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
};
exports.getNotes = getNotes;
const getANotes = async (params) => {
    const user = await UserRepo.getUserById(params.userId);
    if (!user) {
        return { success: false, message: "user not found", data: {} };
    }
    const note = await NoteRepo.getByQuery({ userId: params.userId, _id: params.noteId });
    if (!note) {
        return { success: false, message: "note not found", data: {} };
    }
    return {
        success: true,
        message: "",
        data: { note },
    };
};
exports.getANotes = getANotes;
async function searchGoogle(query) {
    if (!query) {
        return { success: false, message: "search query required", data: {} };
    }
    const searchResult = await (0, puppeteer_1.default)(query);
    return { success: true, message: '', data: { searchResult } };
    console.log(searchResult);
}
exports.searchGoogle = searchGoogle;
