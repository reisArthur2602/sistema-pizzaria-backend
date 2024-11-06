import { Router } from "express";
import { ProductController } from "./product.controller";
import multer from "multer";
import uploadConfig from "../../shared/config/multer";
import { AuthenticatedMiddleware } from "../../shared/middlewares/authenticated.middleware";

export const productRoutes = Router();
const productController = new ProductController();
const upload = multer(uploadConfig.upload("./tmp"));

productRoutes.get("/", productController.list);

productRoutes.post(
  "/",
  AuthenticatedMiddleware,
  upload.single("file"),
  productController.create
);
productRoutes.delete("/", AuthenticatedMiddleware, productController.delete);
