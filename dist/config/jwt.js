"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function generateToken(userId, flag) {
    try {
        const payload = {
            userId,
            flag,
        };
        const token = jsonwebtoken_1.default.sign(payload, process.env.SECRET, { expiresIn: "24h" });
        return token;
    }
    catch (error) {
        console.log(error);
    }
}
exports.generateToken = generateToken;
async function decodeToken(token) {
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.SECRET);
        return payload;
    }
    catch (error) {
        console.log(error);
    }
}
exports.decodeToken = decodeToken;
