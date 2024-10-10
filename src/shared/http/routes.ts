import { Router } from "express";
import { userRoutes } from "../../modules/user/infra/UserRoutes";
import { categoryRoutes } from "../../modules/category/infra/CategoryRoutes";
import { productRoutes } from "../../modules/product/infra/ProductRoutes";
import { orderRoutes } from "../../modules/order/infra/OrderRoutes";
import { itemRoutes } from "../../modules/item/infra/ItemRoutes";

const router = Router();

router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/product", productRoutes);
router.use("/order", orderRoutes);
router.use("/order/item", itemRoutes);

export { router };
