import { Router } from "express";
import { OrderController } from "./OrderController";
import { isAuthenticated } from "../../../shared/middlewares/isAuthenticated";

export const orderRoutes = Router();
const orderController = new OrderController();

orderRoutes.post("/", isAuthenticated, orderController.create);
orderRoutes.get("/", orderController.show);
orderRoutes.delete("/", isAuthenticated, orderController.remove);
orderRoutes.patch("/send", isAuthenticated, orderController.send);
orderRoutes.patch("/finish", isAuthenticated, orderController.finish);
