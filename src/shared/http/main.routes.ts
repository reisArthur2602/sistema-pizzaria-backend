import { Router } from "express";
import { userRoutes } from "../../modules/user/user.routes";

import { orderRoutes } from "../../modules/order/order.routes";
import { categoryRoutes } from "../../modules/category/category.routes";
import { productRoutes } from "../../modules/product/product.routes";
import { itemRoutes } from "../../modules/item/item.routes";

const MainRouter = Router();

MainRouter.use("/user", userRoutes);
MainRouter.use("/category", categoryRoutes);
MainRouter.use("/product", productRoutes);
MainRouter.use("/order", orderRoutes);
MainRouter.use("/order/item", itemRoutes);

export { MainRouter };
