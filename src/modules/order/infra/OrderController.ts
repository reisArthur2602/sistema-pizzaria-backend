import { Request, Response } from "express";
import { CreateOrderService } from "../services/CreateOrderService";
import { z } from "zod";
import { RemoveOrderService } from "../services/RemoveOrderService";

export class OrderController {
  async create(req: Request, res: Response) {
    const { table } = z
      .object({
        table: z.coerce.number({ message: "O número da mesa é obrigatório" }),
      })
      .parse(req.body);

    const createOrder = new CreateOrderService();

    await createOrder.execute(table);

    res.status(201).send({});
  }

  async remove(req: Request, res: Response) {
    const removeOrder = new RemoveOrderService();

    const id = req.query.id as string;

    await removeOrder.execute(id);

    res.status(200).send({});
  }
}
