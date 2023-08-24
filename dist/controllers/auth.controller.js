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
exports.googleAuth = exports.changePassword = exports.signin = exports.signup = void 0;
const AuthService = __importStar(require("../services/auth.service"));
const signup = async (req, res) => {
    try {
        const { success, message, data } = await AuthService.signUp({ ...req.body });
        return res.status(200).json({ success, message, data });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "could not resolve request" });
    }
};
exports.signup = signup;
const signin = async (req, res) => {
    try {
        const { success, message, data } = await AuthService.signin({ ...req.body });
        return res.status(200).json({ success, message, data });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "could not resolve request" });
    }
};
exports.signin = signin;
const changePassword = async (req, res) => {
    try {
        return res.status(200).json({ success: true, message: "Success", data: [] });
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "could not resolve request" });
    }
};
exports.changePassword = changePassword;
const googleAuth = async (req, res) => {
    try {
        console.log("Na here i dey: ", req.user);
    }
    catch (error) {
        return res.status(500).json({ success: false, message: "could not resolve request" });
    }
};
exports.googleAuth = googleAuth;
