// import { OrderModel } from "./orders/order.model";
// import { Order } from "./orders/order.interface";
// import { ProductModel } from "./products.model";

import { ProductModel } from "../products/products.model";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrder = async (orderData: Order): Promise<Order> => {
  try {
    const product = await ProductModel.findById(orderData.productId);
    // console.log(product);
    if (!product) {
      throw new Error("Product not found");
    }
    if (product.inventory.quantity < orderData.quantity) {
      throw new Error("Insufficient quantity in stock");
    }
    product.inventory.quantity -= orderData.quantity;
    product.inventory.inStock = product.inventory.quantity > 0;
    await product.save();
    // Create the order
    const newOrder: any = await OrderModel.create(orderData);
    return newOrder;
  } catch (error) {
    throw new Error(`Failed to create order: ${error}`);
  }
};

const getAllOrdersFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};

const getOrderFromDbByEmail = async (email: string) => {
  const result = await OrderModel.find({ email });
  return result;
};

export const OrderServices = {
  createOrder,
  getAllOrdersFromDB,
  getOrderFromDbByEmail,
};
