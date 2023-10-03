import * as CategoryRepo from "../database/repository/category.repo";
import * as NoteRepo from "../database/repository/note.repo";

export const addCategory = async (params: Record<string, any>) => {
  if (!params.name) {
    return { success: false, message: "invalid category name", data: {} };
  }

  const checkCategory = await CategoryRepo.getCategory({
    name: params.name,
    userId: params.userId,
  });

  if (checkCategory) {
    return { success: false, message: "category already exist", data: {} };
  }

  const category = await CategoryRepo.createCategory({ ...params });

  return {
    success: true,
    message: "",
    data: { category },
  };
};

export const updateCategory = async (params: Record<string, any>) => {
  if (!params.name) {
    return { success: false, message: "invalid category name", data: {} };
  }

  const checkCategory = await CategoryRepo.getCategoryById(params.categoryId);

  if (!checkCategory) {
    return { success: false, message: "category not found", data: {} };
  }

  const category = await CategoryRepo.updateCategory(params.categoryId, { name: params.name });

  return {
    success: true,
    message: "",
    data: { category },
  };
};

export const getCategories = async (params: Record<string, any>) => {
  if (!params.userId) {
    return { success: false, message: "invalid category name", data: {} };
  }

  const categories = await CategoryRepo.getCategories(params.userId);

  return {
    success: true,
    message: "",
    data: { categories },
  };
};
