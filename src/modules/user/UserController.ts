import { Request, Response } from "express";
import { CreateUserService } from "./services/CreateUserService";
import { SessionUserService } from "./services/SessionUserService";
import { DetailsUserService } from "./services/DetailsUserService";

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

  async details(req: Request, res: Response) {
    const id = req.userId;

    const detailsUserService = new DetailsUserService();

    const user = await detailsUserService.execute(id);
    
    res.status(200).json(user);
  }
}
