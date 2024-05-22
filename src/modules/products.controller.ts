import { Request, Response } from "express";
import { ProductServices } from "./products.service";
import ProductValidationSchema from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const zodparsedData = ProductValidationSchema.parse(productData);
    // console.log(zodparsedData);
    const result = await ProductServices.createProductIntoDB(zodparsedData);

    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message || "Something is gone wrong",
      error: err,
    });
  }
};

// const getAllProducts = async (req: Request, res: Response) => {
//   try {
//     const result = await ProductServices.getAllProductsFromDB();

//     res.status(200).json({
//       success: true,
//       message: "Products retrieved successfully",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: "Something went wrong",
//       error: err.message,
//     });
//   }
// };
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query; // Get searchTerm from query parameters
    const filters = searchTerm ? { searchTerm } : {};
    const products = await ProductServices.getAllProductsFromDB(filters);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
      error: error.message || error,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product retrieved successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productData = req.body;
    const result = await ProductServices.updateProductInDB(id, productData);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductServices.deleteProductFromDB(id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};

// const searchProducts = async (req: Request, res: Response) => {
//   try {
//     const { searchTerm } = req.query;
//     const products = await ProductServices.searchProducts(searchTerm as string);

//     res.status(200).json({
//       success: true,
//       message: `Products matching search term '${searchTerm}' fetched successfully!`,
//       data: products,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: "Something went wrong in response",
//       error: err,
//     });
//   }
// };
const searchProducts = async (req: Request, res: Response) => {
  try {
    const { q } = req.query;
    if (!q) {
      return res.status(400).json({
        success: false,
        message: "Search query is required",
      });
    }
    const results = await ProductServices.searchProducts(q as string);
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to search products",
      error: error.message || error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};
