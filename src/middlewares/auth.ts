import { NextFunction, Request, Response } from "express";
import { decodeToken } from "../config/jwt";

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(401).json({ success: false, message: "unauthorized request" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const payload: any = await decodeToken(token);
    if (!payload.userId) {
      return res.status(401).json({ success: false, message: "unauthorized request" });
    }
    req.user = { userId: payload.userId };
    next();
  } catch (error: any) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ success: false, message: "session has expired, please login" });
    }
  }
};

export default validateToken;
