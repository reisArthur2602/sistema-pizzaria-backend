import { Router } from "express";
import { OrderController } from "./OrderController";

export const orderRoutes = Router();
const orderController = new OrderController();

orderRoutes.post("/", orderController.create);
