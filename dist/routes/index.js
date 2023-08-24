"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("../config/logging");
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("./auth.route"));
const note_route_1 = __importDefault(require("./note.route"));
const routes = express_1.default.Router();
routes.use((req, _, next) => {
    logging_1.logger.info(`${process.env.NODE_ENV} - ${new Date()} - ${req.originalUrl}`);
    next();
});
routes.use("/auth", auth_route_1.default);
routes.use("/note", note_route_1.default);
exports.default = routes;
