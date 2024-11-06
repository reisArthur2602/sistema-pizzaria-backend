import { Router } from "express";
import { UserController } from "./user.controller";
import { AuthenticatedMiddleware } from "../../shared/middlewares/authenticated.middleware";

export const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/register", userController.create);
userRoutes.post("/session", userController.session);
userRoutes.get("/details", AuthenticatedMiddleware, userController.details);
