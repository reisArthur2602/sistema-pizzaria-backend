import { Router } from "express";
import { userRoutes } from "../../modules/user/infra/UserRoutes";
import { categoryRoutes } from "../../modules/category/infra/CategoryRoutes";
import { productRoutes } from "../../modules/product/infra/ProductRoutes";

const router = Router();

router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/product", productRoutes);

export { router };
