import { logger } from "../config/logging";
import express from "express";

import { authRoutes } from "./auth.route";

const routes = express.Router();

routes.use((req, _, next) => {
  logger.info(`${process.env.NODE_ENV} - ${new Date()} - ${req.originalUrl}`);
  next();
});

routes.use("/auth", authRoutes);

export default routes;
