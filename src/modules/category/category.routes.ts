import { Router } from "express";
import { CategoryController } from "./category.controller";
import { AuthenticatedMiddleware } from "../../shared/middlewares/authenticated.middleware";


export const categoryRoutes = Router();
const categoryController = new CategoryController();

categoryRoutes.post("/", AuthenticatedMiddleware, categoryController.create);
categoryRoutes.get("/", categoryController.list);
categoryRoutes.delete("/", categoryController.delete);
