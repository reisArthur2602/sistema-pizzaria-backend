import { Request, Response } from "express";
import { CreateOrderService } from "./services/create-order.services";
import { z } from "zod";
import { RemoveOrderService } from "./services/remove-order.services";
import { SendOrderService } from "./services/send-order.services";
import { FinishOrderService } from "./services/finish-order.services";
import { ShowOrderService } from "./services/show-order.services";

import { ListOrderInProductionCurrentService } from "./services/list-order-in-production-current.services";
import { ListOrderInProductionService } from "./services/list-order-in-production.services";

export class OrderController {
  async create(req: Request, res: Response) {
    const { table } = z
      .object({
        table: z.coerce.number({ message: "O número da mesa é obrigatório" }),
      })
      .parse(req.body);

    const createOrder = new CreateOrderService();

    const { id } = await createOrder.execute(table);

    res.status(201).json({ id });
  }

  async remove(req: Request, res: Response) {
    const removeOrder = new RemoveOrderService();

    const id = req.query.id as string;

    await removeOrder.execute(id);

    res.status(200).send({});
  }

  async send(req: Request, res: Response) {
    const sendOrder = new SendOrderService();

    const id = req.query.id as string;

    await sendOrder.execute(id);

    res.status(200).send({});
  }

  async finish(req: Request, res: Response) {
    const finishOrder = new FinishOrderService();

    const id = req.query.id as string;

    await finishOrder.execute(id);

    res.status(200).send({});
  }

  async show(req: Request, res: Response) {
    const showOrder = new ShowOrderService();

    const id = req.query.id as string;

    const order = await showOrder.execute(id);

    res.status(200).json(order);
  }

  async listInProduction(req: Request, res: Response) {
    const listOrdersInProduction = new ListOrderInProductionService();

    const order = await listOrdersInProduction.execute();

    res.status(200).json(order);
  }

  async listInProductionCurrent(req: Request, res: Response) {
    const listOrdersInProductionCurrent =
      new ListOrderInProductionCurrentService();

    const order = await listOrdersInProductionCurrent.execute();

    res.status(200).json(order);
  }
}
