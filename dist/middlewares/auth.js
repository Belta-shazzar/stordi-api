"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = require("../config/jwt");
const validateToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return res.status(401).json({ success: false, message: "unauthorized request" });
    }
    const token = authHeader.split(" ")[1];
    try {
        const payload = await (0, jwt_1.decodeToken)(token);
        if (!payload.userId) {
            return res.status(401).json({ success: false, message: "unauthorized request" });
        }
        req.user = { userId: payload.userId };
        next();
    }
    catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({ success: false, message: "session has expired, please login" });
        }
    }
};
exports.default = validateToken;
