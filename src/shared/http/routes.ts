import { Router } from "express";
import { userRoutes } from "../../modules/user/UserRoutes";

const router = Router();

router.use("/user", userRoutes);

export { router };
