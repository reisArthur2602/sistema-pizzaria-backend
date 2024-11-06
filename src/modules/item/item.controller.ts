import { Request, Response } from "express";

import { CreateItemService } from "./services/create-item.services";
import { RemoveItemService } from "./services/remove-item.services";
import { CreateItemSchema, RemoveItemSchema } from "./item.schema";
import { BadRequestError } from "../../shared/helpers/errors";
import { GENERAL_MESSAGES } from "../../shared/helpers/general-messages";

export class ItemController {
  async create(req: Request, res: Response) {
    const { success, data } = CreateItemSchema.safeParse(req.query);

    if (!success) throw new BadRequestError(GENERAL_MESSAGES.FILL_DATA_ERROR);

    const createItem = new CreateItemService();

    await createItem.execute(data);

    res.status(204).json();
  }

  async remove(req: Request, res: Response) {
    const { success, data } = RemoveItemSchema.safeParse(req.query);

    if (!success) throw new BadRequestError(GENERAL_MESSAGES.FILL_DATA_ERROR);

    const removeItem = new RemoveItemService();

    await removeItem.execute(data.id);

    res.status(204).json();
  }
}
