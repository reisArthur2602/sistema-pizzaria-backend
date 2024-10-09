import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { SessionUserService } from "../services/SessionUserService";
import { DetailsUserService } from "../services/DetailsUserService";
import { z } from "zod";

export class UserController {
  async create(req: Request, res: Response) {
    const body = z
      .object({
        email: z
          .string({ message: "O campo email é obrigatório" })
          .min(1)
          .email(),
        password: z.string({ message: "o campo senha é obrigatório" }).min(6, {
          message: "o campo senha deve conter pelo menos 6 caracteres",
        }),
      })
      .parse(req.body);
    const createUserService = new CreateUserService();

    await createUserService.execute(body);

    res.status(201).send({});
  }

  async session(req: Request, res: Response) {
    const body = z
      .object({
        email: z
          .string({ message: "O campo email é obrigatório" })
          .min(1)
          .email(),
        password: z.string({ message: "o campo senha é obrigatório" }).min(6, {
          message: "o campo senha deve conter pelo menos 6 caracteres",
        }),
      })
      .parse(req.body);

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
