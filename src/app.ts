import dotenv from "dotenv";
dotenv.config();

import express, { Express, Request, Response, NextFunction } from "express";
import routes from "./routes";
import cors from "cors";
import helmet from "helmet";
import cookieSession from 'cookie-session';
import passport from './config/passport'

const app: Express = express();

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.SECRET!],
  }))

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", routes);

app.get("/health_check", async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ status: true, message: "Success" });
});

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  res.status(err.status || 500).send(err.message);
});

app.use("*", function (req, res) {
  res.status(404).send({ message: "Resource not found" });
});

export { app };
