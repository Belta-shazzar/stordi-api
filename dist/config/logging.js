"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
var logRotateTransport = new winston_daily_rotate_file_1.default({
    filename: "./logs/application-%DATE%.log",
    datePattern: "DD-MM-yyyy",
});
let format = winston_1.default.format;
const prettyJson = format.printf((info) => {
    var _a;
    if (((_a = info.message) === null || _a === void 0 ? void 0 : _a.constructor) === Object) {
        info.message = JSON.stringify(info.message, null, 4);
    }
    return `${info.level}: ${info.message}`;
});
exports.logger = winston_1.default.createLogger({
    level: "info",
    transports: [new winston_1.default.transports.Console(), logRotateTransport],
    format: format.combine(format.colorize(), format.prettyPrint(), format.splat(), format.simple(), prettyJson),
});
