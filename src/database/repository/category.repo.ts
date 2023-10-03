import Category from "../models/category.model";

export const createCategory = async (query: Record<string, any>) => {
  return await Category.create(query);
};

export const getCategory = async (query: Record<string, any>) => {
  return await Category.findOne(query);
};

export const getCategoryById = async (categoryId: string) => {
  return await Category.findById(categoryId);
};

export const updateCategory = async (categoryId: string, query: Record<string, any>) => {
  return await Category.findByIdAndUpdate(categoryId, query, { new: true });
};

export const getCategories = async (userId: string) => {
  return await Category.find({ userId });
}

// export const getUserByEmail = async (email: string) => {
//   return await User.findOne({ email });
// };

// export const getByGoogleID = async (googleId: string) => {
//   return await User.findOne({ googleId });
// };
