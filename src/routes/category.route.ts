import express from "express";
import * as CategoryController from "../controllers/category.controller";
import Auth from "../middlewares/auth";

const route = express.Router();

route.post("/", Auth, CategoryController.addCategory);
route.put("/:categoryId", Auth, CategoryController.updateCategory);
route.get("/", Auth, CategoryController.getCategories);

export default route;
