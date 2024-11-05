import { Router } from "express";
import { CategoryController } from "./category.controller";
import { isAuthenticated } from "../../shared/middlewares/isAuthenticated";


export const categoryRoutes = Router();
const categoryController = new CategoryController();

categoryRoutes.post("/", isAuthenticated, categoryController.create);
categoryRoutes.get("/", categoryController.list);
categoryRoutes.delete("/", categoryController.delete);
