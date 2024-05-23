import mongoose from "mongoose";
import { ProductModel } from "./products.model";
import { Product } from "./products.interface";

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async (filters: any = {}) => {
  let query = {};
  if (filters.searchTerm) {
    query = {
      name: { $regex: filters.searchTerm, $options: "i" },
    };
  }
  const result = await ProductModel.find(query);
  return result;
};

const getSingleProductFromDB = async (productId: string) => {
  // const result = await ProductModel.findById(productId);
  const result = await ProductModel.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(productId) } },
  ]);
  return result;
};

const updateProductInDB = async (id: string, product: Partial<Product>) => {
  const result = await ProductModel.findByIdAndUpdate(id, product, {
    new: true,
  });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

const searchProducts = async (searchTerm: string): Promise<Product[]> => {
  const results = await ProductModel.find({
    name: { $regex: searchTerm, $options: "i" },
  });
  return results;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
  searchProducts,
};
