import { Router } from "express";
import { userRoutes } from "../../modules/user/user.routes";
import { categoryRoutes } from "../../modules/category/infra/CategoryRoutes";
import { productRoutes } from "../../modules/product/infra/ProductRoutes";
import { orderRoutes } from "../../modules/order/infra/OrderRoutes";
import { itemRoutes } from "../../modules/item/infra/ItemRoutes";

const MainRouter = Router();

MainRouter.use("/user", userRoutes);
MainRouter.use("/category", categoryRoutes);
MainRouter.use("/product", productRoutes);
MainRouter.use("/order", orderRoutes);
MainRouter.use("/order/item", itemRoutes);

export { MainRouter };
