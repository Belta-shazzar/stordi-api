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
exports.googleAuth = exports.signin = exports.signUp = void 0;
const lodash_1 = __importDefault(require("lodash"));
const UserRepo = __importStar(require("../database/repository/user.repo"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const util_1 = require("../util");
const jwt_1 = require("../config/jwt");
const signUp = async (signupReq) => {
    const { fullname, email, password } = signupReq;
    if (!fullname || !email || !password) {
        return { success: false, message: "invalid or missing inputs", data: {} };
    }
    const checkUser = await UserRepo.getUserByEmail(email);
    if (checkUser) {
        return { success: false, message: "email already exist", data: {} };
    }
    const [firstname, lastname] = fullname.split(" ");
    if (!firstname || !lastname)
        return { success: false, message: "please enter full name", data: {} };
    const user = await UserRepo.create({
        firstname,
        lastname,
        email,
        password,
    });
    const token = await (0, jwt_1.generateToken)(user._id.toString(), util_1.Flag.AUTH);
    return {
        success: true,
        message: "",
        data: { user: lodash_1.default.omit(user.toJSON(), ["password", "__v"]), token },
    };
};
exports.signUp = signUp;
const signin = async (signinReq) => {
    const { email, password } = signinReq;
    if (!email || !password) {
        return { success: false, message: "invalid or missing inputs", data: {} };
    }
    const user = await UserRepo.getUserByEmail(email);
    if (!user) {
        return { success: false, message: "email does not exist", data: {} };
    }
    const checkPassword = await bcryptjs_1.default.compare(password, user.password);
    if (!checkPassword) {
        return { success: false, message: "incorrect password", data: {} };
    }
    const token = await (0, jwt_1.generateToken)(user._id.toString(), util_1.Flag.AUTH);
    return {
        success: true,
        message: "",
        data: { user: lodash_1.default.omit(user.toJSON(), ["password", "__v"]), token },
    };
};
exports.signin = signin;
const googleAuth = async (profile) => {
    const checkUser = UserRepo.getByGoogleID(profile.id);
    if (!checkUser) {
        const user = await UserRepo.create({
            firstname: profile.name.givenName,
            lastname: profile.name.familyName,
            email: profile._json.email,
            googleId: profile.id,
            emailVerifiedAt: new Date(),
        });
        return user;
    }
    return checkUser;
};
exports.googleAuth = googleAuth;
