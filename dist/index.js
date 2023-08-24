"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const logging_1 = require("./config/logging");
const mongo_1 = __importDefault(require("./config/mongo"));
const port = process.env.PORT || 3000;
const start = async () => {
    try {
        app_1.app.listen(port, async () => {
            // await monitorRedisConnection();
            await (0, mongo_1.default)();
            logging_1.logger.info(`NOTE APP Core Service [${process.env.NODE_ENV}] running on port: ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
start();
