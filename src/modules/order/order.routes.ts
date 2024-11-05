import { Router } from "express";
import { OrderController } from "./order.controller";
import { isAuthenticated } from "../../shared/middlewares/isAuthenticated";

export const orderRoutes = Router();
const orderController = new OrderController();

orderRoutes.post("/", isAuthenticated, orderController.create);
orderRoutes.get("/", orderController.listInProduction);
orderRoutes.get("/current", orderController.listInProductionCurrent);
orderRoutes.get("/show", orderController.show);
orderRoutes.delete("/", isAuthenticated, orderController.remove);
orderRoutes.patch("/send", isAuthenticated, orderController.send);
orderRoutes.patch("/finish", isAuthenticated, orderController.finish);
