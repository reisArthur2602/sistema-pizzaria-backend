import { Router } from "express";
import { UserController } from "./UserController";

export const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/register", userController.create);
userRoutes.post("/session", userController.session);
