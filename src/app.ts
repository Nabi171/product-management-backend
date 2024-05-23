import express, { Application, Request, Response } from "express";
import { ProductRoutes } from "./modules/products/products.route";
import { OrderRoutes } from "./modules/orders/order.routes";
import cors from "cors";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRoutes);
const getAController = (req: Request, res: Response) => {
  res.send("backend server is running");
};
app.get("/", getAController);
app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

export default app;
