import { Request, Response } from "express";
import { CreateUserService } from "./services/create-user.services";
import { SessionUserService } from "./services/session-user.services";
import { DetailsUserService } from "./services/details-user.services";

import { CreateUserSchema, SessionUserSchema } from "./user.schema";
import { BadRequestError } from "../../shared/helpers/errors";
import { GENERAL_MESSAGES } from "../../shared/helpers/general-messages";

export class UserController {
  async create(req: Request, res: Response) {
    const { success, data } = CreateUserSchema.safeParse(req.body);

    if (!success) {
      throw new BadRequestError(GENERAL_MESSAGES.FILL_DATA_ERROR);
    }

    const createUserService = new CreateUserService();

    await createUserService.execute(data);

    res.status(204).json();
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
