import { Router } from "express";

import { ItemController } from "./item.controller";
import { isAuthenticated } from "../../shared/middlewares/isAuthenticated";

export const itemRoutes = Router();

const itemController = new ItemController();

itemRoutes.post("/", isAuthenticated, itemController.create);
itemRoutes.delete("/", isAuthenticated, itemController.remove);
