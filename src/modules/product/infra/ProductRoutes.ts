import { Router } from "express";
import { ProductController } from "./ProductController";

export const productRoutes = Router();
const productController = new ProductController();

productRoutes.post("/", productController.create);
