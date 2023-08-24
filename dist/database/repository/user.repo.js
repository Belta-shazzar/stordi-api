"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByGoogleID = exports.getUserByEmail = exports.getUserById = exports.create = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const create = async (details) => {
    return await user_model_1.default.create({ ...details });
};
exports.create = create;
const getUserById = async (userId) => {
    const user = await user_model_1.default.findById(userId);
    return user;
};
exports.getUserById = getUserById;
const getUserByEmail = async (email) => {
    return await user_model_1.default.findOne({ email });
};
exports.getUserByEmail = getUserByEmail;
const getByGoogleID = async (googleId) => {
    return await user_model_1.default.findOne({ googleId });
};
exports.getByGoogleID = getByGoogleID;
