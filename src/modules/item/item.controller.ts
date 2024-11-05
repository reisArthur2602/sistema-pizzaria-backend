import { Request, Response } from "express";

import { CreateItemService } from "./services/create-item.services";
import { RemoveItemService } from "./services/remove-item.services";
import { CreateItemSchema } from "./item.schema";

export class ItemController {
  async create(req: Request, res: Response) {
    const body = CreateItemSchema.parse(req.body);

    const createItem = new CreateItemService();

    await createItem.execute(body);

    res.status(201).send({});
  }

  async remove(req: Request, res: Response) {
    const id = req.query.id as string;

    const removeItem = new RemoveItemService();

    await removeItem.execute(id);

    res.status(200).send({});
  }
}
