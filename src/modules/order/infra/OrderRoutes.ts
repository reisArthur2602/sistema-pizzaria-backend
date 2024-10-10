import { Router } from "express";
import { OrderController } from "./OrderController";
import { isAuthenticated } from "../../../shared/middlewares/isAuthenticated";

export const orderRoutes = Router();
const orderController = new OrderController();

orderRoutes.post("/", isAuthenticated, orderController.create);
orderRoutes.delete("/", isAuthenticated, orderController.remove);
