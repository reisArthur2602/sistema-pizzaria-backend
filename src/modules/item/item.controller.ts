import { Request, Response } from "express";

import { CreateItemService } from "./services/create-item.services";
import { RemoveItemService } from "./services/remove-item.services";
import { CreateItemSchema, RemoveItemSchema } from "./item.schema";

export class ItemController {
  async create(req: Request, res: Response) {
    const body = CreateItemSchema.parse(req.body);

    const createItem = new CreateItemService();

    await createItem.execute(body);

    res.status(204).json();
  }

  async remove(req: Request, res: Response) {
    const query = RemoveItemSchema.parse(req.query);

    const removeItem = new RemoveItemService();

    await removeItem.execute(query.id);

    res.status(204).json();
  }
}
