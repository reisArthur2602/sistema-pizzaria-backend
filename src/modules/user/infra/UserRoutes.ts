import { Router } from "express";
import { UserController } from "./UserController";
import { isAuthenticated } from "../../../shared/middlewares/isAuthenticated";

export const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/register", userController.create);
userRoutes.post("/session", userController.session);
userRoutes.get("/details", isAuthenticated, userController.details);
