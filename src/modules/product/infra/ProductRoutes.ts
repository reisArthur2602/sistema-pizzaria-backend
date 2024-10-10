import { Router } from "express";
import { ProductController } from "./ProductController";
import multer from "multer";
import uploadConfig from "../../../shared/config/multer";
import { isAuthenticated } from "../../../shared/middlewares/isAuthenticated";

export const productRoutes = Router();
const productController = new ProductController();
const upload = multer(uploadConfig.upload("./tmp"));

productRoutes.post(
  "/",
  isAuthenticated,
  upload.single("file"),
  productController.create
);
