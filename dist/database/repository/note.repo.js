"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByQuery = exports.getNotes = exports.create = void 0;
const note_model_1 = __importDefault(require("../models/note.model"));
const create = async (details) => {
    return await note_model_1.default.create(details);
};
exports.create = create;
const getNotes = async (userId) => {
    return await note_model_1.default.find({ userId });
};
exports.getNotes = getNotes;
const getByQuery = async (params) => {
    return await note_model_1.default.findOne(params);
};
exports.getByQuery = getByQuery;
