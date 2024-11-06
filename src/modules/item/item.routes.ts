import { Router } from "express";

import { ItemController } from "./item.controller";
import { AuthenticatedMiddleware } from "../../shared/middlewares/authenticated.middleware";

export const itemRoutes = Router();

const itemController = new ItemController();

itemRoutes.post("/", AuthenticatedMiddleware, itemController.create);
itemRoutes.delete("/", AuthenticatedMiddleware, itemController.remove);
