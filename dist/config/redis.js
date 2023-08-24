"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitorRedisConnection = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const logging_1 = require("./logging");
const redis = new ioredis_1.default({
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT),
});
exports.default = redis;
const monitorRedisConnection = async () => {
    return new Promise((resolve, reject) => {
        redis.on('connect', () => {
            logging_1.logger.info('connected to redis server');
            resolve(true);
        });
        redis.on('error', (error) => {
            logging_1.logger.error('error connecting to redis', {
                error,
            });
            reject(error);
        });
    });
};
exports.monitorRedisConnection = monitorRedisConnection;
