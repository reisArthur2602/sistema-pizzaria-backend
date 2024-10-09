import { Request, Response } from "express";
import { CreateUserService } from "./services/CreateUserService";

export class UserController {
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const createUserService = new CreateUserService();

    await createUserService.execute({ email, password });

    res.status(201).send({});
  }
}
