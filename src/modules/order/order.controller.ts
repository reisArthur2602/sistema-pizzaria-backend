import { Request, Response } from "express";
import { CreateOrderService } from "./services/create-order.services";

import { RemoveOrderService } from "./services/remove-order.services";
import { SendOrderService } from "./services/send-order.services";
import { FinishOrderService } from "./services/finish-order.services";
import { ShowOrderService } from "./services/show-order.services";

import { ListAllOrderService } from "./services/list-all-order.services";
import {
  CreateOrderSchema,
  DeleteOrderSchema,
  FinishOrderSchema,
  SendOrderSchema,
  ShowOrderSchema,
} from "./order.schema";

import { ListOrderInProductionService } from "./services/list-order-in-production.services";

export class OrderController {
  async create(req: Request, res: Response) {
    const body = CreateOrderSchema.parse(req.body);

    const createOrder = new CreateOrderService();

    const { id } = await createOrder.execute(body.table);

    res.status(201).json({ id });
  }

  async remove(req: Request, res: Response) {
    const query = DeleteOrderSchema.parse(req.query);

    const removeOrder = new RemoveOrderService();

    await removeOrder.execute(query.id);

    res.status(204).json();
  }

  async send(req: Request, res: Response) {
    const query = SendOrderSchema.parse(req.query);

    const sendOrder = new SendOrderService();

    await sendOrder.execute(query.id);

    res.status(204).json();
  }

  async finish(req: Request, res: Response) {
    const query = FinishOrderSchema.parse(req.query);

    const finishOrder = new FinishOrderService();

    await finishOrder.execute(query.id);

    res.status(204).json();
  }

  async show(req: Request, res: Response) {
    const query = ShowOrderSchema.parse(req.query);

    const showOrder = new ShowOrderService();

    const order = await showOrder.execute(query.id);

    res.status(200).json(order);
  }

  async listAll(req: Request, res: Response) {
    const listAllOrders = new ListAllOrderService();

    const order = await listAllOrders.execute();

    res.status(200).json(order);
  }

  async listInProduction(req: Request, res: Response) {
    const listOrdersInProduction = new ListOrderInProductionService();

    const order = await listOrdersInProduction.execute();

    res.status(200).json(order);
  }
}
