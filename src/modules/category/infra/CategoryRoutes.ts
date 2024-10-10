import { Router } from "express";
import { CategoryController } from "./CategoryController";

export const categoryRoutes = Router();
const categoryController = new CategoryController();

categoryRoutes.post("/", categoryController.create);
