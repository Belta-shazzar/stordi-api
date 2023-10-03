import { logger } from "../config/logging";
import express from "express";

import authRoutes from "./auth.route";
import noteRoutes from "./note.route"
import categoryRoutes from "./category.route"

const routes = express.Router();

routes.use((req, _, next) => {
  logger.info(`${process.env.NODE_ENV} - ${new Date()} - ${req.originalUrl}`);
  next();
});

routes.use("/auth", authRoutes);
routes.use("/note", noteRoutes);
routes.use("/category", categoryRoutes)

export default routes;
