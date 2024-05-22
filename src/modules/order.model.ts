import { Schema, model, Document } from "mongoose";
import { Order } from "./order.interface";

const orderSchema = new Schema<Order>({
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v: string) {
        return /\S+@\S+\.\S+/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const OrderModel = model<Order & Document>("Order", orderSchema);
