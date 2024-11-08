import { Router } from "express";
import { OrderController } from "./order.controller";
import { AuthenticatedMiddleware } from "../../shared/middlewares/authenticated.middleware";

export const orderRoutes = Router();
const orderController = new OrderController();

orderRoutes.post("/", AuthenticatedMiddleware, orderController.create);
orderRoutes.get("/", orderController.listInProduction);
orderRoutes.get("/current", orderController.listInProductionCurrent);
orderRoutes.get("/show", orderController.show);
orderRoutes.delete("/", AuthenticatedMiddleware, orderController.remove);
orderRoutes.patch("/send", AuthenticatedMiddleware, orderController.send);
orderRoutes.patch("/finish", AuthenticatedMiddleware, orderController.finish);
