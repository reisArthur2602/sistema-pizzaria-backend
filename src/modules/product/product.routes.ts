import { Router } from "express";
import { ProductController } from "./product.controller";
import multer from "multer";
import uploadConfig from "../../shared/config/multer";
import { isAuthenticated } from "../../shared/middlewares/isAuthenticated";

export const productRoutes = Router();
const productController = new ProductController();
const upload = multer(uploadConfig.upload("./tmp"));

productRoutes.get("/", productController.list);

productRoutes.post(
  "/",
  isAuthenticated,
  upload.single("file"),
  productController.create
);
productRoutes.delete("/", isAuthenticated, productController.delete);
