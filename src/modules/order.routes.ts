import express from "express";
import { OrderController } from "./order.controller";
// import { OrderController } from "./order.controller";

const router = express.Router();

router.post("/", OrderController.createOrder);
router.get("/", OrderController.getAllOrders);
router.get("/", OrderController.getOrdersByEmail);
// http://localhost:5000/api/orders/by-email?email=level4@programming-hero.com
// /api/orders?email=level2@programming-hero.com

export const OrderRoutes = router;
