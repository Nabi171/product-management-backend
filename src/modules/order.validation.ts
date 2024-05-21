import { z } from "zod";

const OrderValidationSchema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  productId: z.string().nonempty("Product ID is required"),
  price: z
    .number()
    .min(0, "Price must be a positive number")
    .nonnegative("Price cannot be negative"),
  quantity: z
    .number()
    .int("Quantity must be an integer")
    .min(1, "Quantity must be at least 1"),
});

export default OrderValidationSchema;
