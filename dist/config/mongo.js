"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const logging_1 = require("./logging");
const connectDb = () => {
    try {
        mongoose_1.default.set("strictQuery", true);
        return mongoose_1.default
            .connect(process.env.MONGO_URI)
            .then((() => logging_1.logger.info('connected to mongo db server')));
    }
    catch (error) {
        console.log(error);
    }
};
exports.default = connectDb;
