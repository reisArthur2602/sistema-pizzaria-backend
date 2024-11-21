import { Router } from "express";
import { OrderController } from "./order.controller";
import { AuthenticatedMiddleware } from "../../shared/middlewares/authenticated.middleware";

export const orderRoutes = Router();
const orderController = new OrderController();

orderRoutes.post("/", AuthenticatedMiddleware, orderController.create);
orderRoutes.get("/", orderController.listAll);
orderRoutes.get("/show", orderController.show);
orderRoutes.delete("/", AuthenticatedMiddleware, orderController.remove);
orderRoutes.patch("/:id/:status", AuthenticatedMiddleware, orderController.update);
