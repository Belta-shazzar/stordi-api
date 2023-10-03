import { Response, Request } from "express";
import * as CategoryService from "../services/category.service";

export const addCategory = async (req: any, res: Response) => {
  try {
    const { success, message, data } = await CategoryService.addCategory({
      ...req.body,
      userId: req.user.userId,
    });
    return res.status(200).json({ success, message, data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "could not resolve request" });
  }
};

export const updateCategory = async (req: any, res: Response) => {
  try {
    const { success, message, data } = await CategoryService.updateCategory({
      categoryId: req.params.categoryId,
      name: req.body.name,
    });
    return res.status(200).json({ success, message, data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "could not resolve request" });
  }
};

export const getCategories = async (req: any, res: Response) => {
  try {
    const { success, message, data } = await CategoryService.getCategories({
      userId: req.user.userId
    });
    return res.status(200).json({ success, message, data });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "could not resolve request" });
  }
};

