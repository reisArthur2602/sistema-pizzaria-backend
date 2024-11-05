import { Request, Response } from "express";
import { CreateUserService } from "./services/create-user.services";
import { SessionUserService } from "./services/session-user.services";
import { DetailsUserService } from "./services/details-user.services";
import { z } from "zod";
import { CreateUserSchema, SessionUserSchema } from "./user.schema";

export class UserController {
  async create(req: Request, res: Response) {
    const body = CreateUserSchema.parse(req.body);
    
    const createUserService = new CreateUserService();

    await createUserService.execute(body);

    res.status(201).send({});
  }

  async session(req: Request, res: Response) {
    const body = SessionUserSchema.parse(req.body);

    const sessionUserService = new SessionUserService();

    const user = await sessionUserService.execute(body);

    res.status(200).json(user);
  }

  async details(req: Request, res: Response) {
    const id = req.userId;

    const detailsUserService = new DetailsUserService();

    const user = await detailsUserService.execute(id);

    res.status(200).json(user);
  }
}
