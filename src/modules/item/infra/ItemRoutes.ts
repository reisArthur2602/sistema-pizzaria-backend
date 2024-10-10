import { Router } from "express";
import { isAuthenticated } from "../../../shared/middlewares/isAuthenticated";
import { ItemController } from "./ItemController";

export const itemRoutes = Router();

const itemController = new ItemController();

itemRoutes.post("/", isAuthenticated, itemController.create);
