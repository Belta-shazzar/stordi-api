"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const UserSchema = new mongoose_1.default.Schema({
    firstname: {
        type: String,
        trim: true,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        required: true,
    },
    ip: {
        type: String,
        select: false,
    },
    userAgent: {
        type: String,
        select: false,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
    },
    emailVerifiedAt: {
        type: Date,
    },
    password: {
        type: String,
    },
    googleId: {
        type: String
    }
}, { timestamps: true });
UserSchema.pre("save", async function () {
    if (this.isNew) {
        const salt = await bcryptjs_1.default.genSalt(parseInt(process.env.BCRYPT_GENSALT));
        this.password = await bcryptjs_1.default.hash(this.password, salt);
    }
});
exports.default = mongoose_1.default.model("User", UserSchema);
