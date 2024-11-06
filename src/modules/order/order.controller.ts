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
import { BadRequestError } from "../../shared/helpers/errors";
import { GENERAL_MESSAGES } from "../../shared/helpers/general-messages";
import { ListOrderInProductionService } from "./services/list-order-in-production.services";

export class OrderController {
  async create(req: Request, res: Response) {
    const { success, data } = CreateOrderSchema.safeParse(req.body);

    if (!success) throw new BadRequestError(GENERAL_MESSAGES.FILL_DATA_ERROR);

    const createOrder = new CreateOrderService();

    const { id } = await createOrder.execute(data.table);

    res.status(201).json({ id });
  }

  async remove(req: Request, res: Response) {
    const { success, data } = DeleteOrderSchema.safeParse(req.query);

    if (!success) throw new BadRequestError(GENERAL_MESSAGES.FILL_DATA_ERROR);

    const removeOrder = new RemoveOrderService();

    await removeOrder.execute(data.id);

    res.status(204).json();
  }

  async send(req: Request, res: Response) {
    const { success, data } = SendOrderSchema.safeParse(req.query);

    if (!success) throw new BadRequestError(GENERAL_MESSAGES.FILL_DATA_ERROR);

    const sendOrder = new SendOrderService();

    await sendOrder.execute(data.id);

    res.status(204).json();
  }

  async finish(req: Request, res: Response) {
    const { success, data } = FinishOrderSchema.safeParse(req.query);

    if (!success) throw new BadRequestError(GENERAL_MESSAGES.FILL_DATA_ERROR);

    const finishOrder = new FinishOrderService();

    await finishOrder.execute(data.id);

    res.status(204).json();
  }

  async show(req: Request, res: Response) {
    const { success, data } = ShowOrderSchema.safeParse(req.query);

    if (!success) throw new BadRequestError(GENERAL_MESSAGES.FILL_DATA_ERROR);

    const showOrder = new ShowOrderService();

    const order = await showOrder.execute(data.id);

    res.status(200).json(order);
  }

  async listAll(req: Request, res: Response) {
    const listAllOrders = new ListAllOrderService();

    const order = await listAllOrders.execute();

    res.status(200).json(order);
  }

  async listInProduction(req: Request, res: Response) {
    const listOrdersInProductionCurrent =
      new ListOrderInProductionService();

    const order = await listOrdersInProductionCurrent.execute();

    res.status(200).json(order);
  }
}
