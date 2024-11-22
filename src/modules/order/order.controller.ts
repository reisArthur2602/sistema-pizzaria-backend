import { Request, Response } from "express";
import { CreateOrderService } from "./services/create-order.services";

import { RemoveOrderService } from "./services/remove-order.services";
import { UpdateOrderService } from "./services/update-order.services";
import { ShowOrderService } from "./services/show-order.services";

import { ListAllOrderService } from "./services/list-all-order.services";
import {
  CreateOrderSchema,
  DeleteOrderSchema,
  FilterOrderSchema,
  ShowOrderSchema,
  UpdateOrderSchema,
} from "./order.schema";
import { OrderStatus } from "./order.types";

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

  async update(req: Request, res: Response) {
    const { id, status } = UpdateOrderSchema.parse(req.params);

    const updateOrder = new UpdateOrderService();

    await updateOrder.execute(id, status);

    res.status(204).json();
  }

  async show(req: Request, res: Response) {
    const query = ShowOrderSchema.parse(req.query);

    const showOrder = new ShowOrderService();

    const order = await showOrder.execute(query.id);

    res.status(200).json(order);
  }

  async listAll(req: Request, res: Response) {
    const query = FilterOrderSchema.parse(req.query);

    const listAllOrders = new ListAllOrderService();

    const orders = await listAllOrders.execute(query.status);

    res.status(200).json(orders);
  }
}
