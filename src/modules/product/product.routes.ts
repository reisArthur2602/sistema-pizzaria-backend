import { Router } from "express";
import { ProductController } from "./product.controller";

import { AuthenticatedMiddleware } from "../../shared/middlewares/authenticated.middleware";

export const productRoutes = Router();
const productController = new ProductController();

productRoutes.get("/", productController.list);
productRoutes.post("/", AuthenticatedMiddleware, productController.create);
productRoutes.delete("/", AuthenticatedMiddleware, productController.delete);
