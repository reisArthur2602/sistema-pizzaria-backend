import { Router } from "express";
import { userRoutes } from "../../modules/user/infra/UserRoutes";
import { categoryRoutes } from "../../modules/category/infra/CategoryRoutes";

const router = Router();

router.use("/user", userRoutes);
router.use("/category", categoryRoutes);

export { router };
