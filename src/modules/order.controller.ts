import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import OrderValidationSchema from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const zodparsedData: any = OrderValidationSchema.parse(orderData);

    const newOrder = await OrderServices.createOrder(zodparsedData);

    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: newOrder,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create order",
      error: error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrdersFromDB();

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: err.message,
    });
  }
};

const getOrdersByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email query parameter is required",
      });
    }

    const orders = await OrderServices.getOrderFromDbByEmail(email as string);

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully for user email!",
      data: orders,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch orders",
      error: error.message || error,
    });
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
  getOrdersByEmail,
};
