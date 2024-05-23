import express from "express";
import { ProductControllers } from "./products.controller";

const router = express.Router();
router.post("/", ProductControllers.createProduct);
router.get("/", ProductControllers.getAllProducts);
router.get("/:productId", ProductControllers.getSingleProduct);
router.put("/:id", ProductControllers.updateProduct);
router.delete("/:id", ProductControllers.deleteProduct);
// router.get("/search", ProductControllers.searchProducts);

export const ProductRoutes = router;
