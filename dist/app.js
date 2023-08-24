"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const passport_1 = __importDefault(require("./config/passport"));
const app = (0, express_1.default)();
exports.app = app;
app.use((0, cookie_session_1.default)({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.SECRET],
}));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use("/api/v1", routes_1.default);
app.get("/health_check", async (req, res, next) => {
    res.status(200).json({ status: true, message: "Success" });
});
app.use((err, _req, res, _next) => {
    res.status(err.status || 500).send(err.message);
});
app.use("*", function (req, res) {
    res.status(404).send({ message: "Resource not found" });
});
