import { Request, Response } from "express";
import { CreateUserService } from "./services/CreateUserService";
import { SessionUserService } from "./services/SessionUserService";

export class UserController {
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const createUserService = new CreateUserService();

    await createUserService.execute({ email, password });

    res.status(201).send({});
  }

  async session(req: Request, res: Response) {
    const { email, password } = req.body;

    const sessionUserService = new SessionUserService();

    const user = await sessionUserService.execute({ email, password });

    res.status(200).json(user);
  }
}
