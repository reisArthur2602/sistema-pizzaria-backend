import { db } from "../../../shared/database/prisma-connection";
import { IOrderRepository, IOrderResponse } from "./IOrderRepository";

export class OrderRepository implements IOrderRepository {
  async list(): Promise<IOrderResponse[] | []> {
    return await db.order.findMany({
      include: { Item: { include: { product: true } } },
    });
  }

  async findByTable(table: number): Promise<IOrderResponse | null> {
    return await db.order.findFirst({
      where: {
        AND: [{ table }, { status: false }],
      },
      include: {
        Item: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async findById(id: string): Promise<IOrderResponse | null> {
    return await db.order.findUnique({
      where: { id },
      include: {
        Item: {
          include: {
            product: true,
          },
        },
      },
    });
  }

  async create(table: number): Promise<void> {
    await db.order.create({ data: { table } });
  }

  async remove(id: string): Promise<void> {
    await db.order.delete({ where: { id } });
  }
  async send(id: string): Promise<void> {
    await db.order.update({ where: { id }, data: { draft: false } });
  }

  async finish(id: string): Promise<void> {
    await db.order.update({ where: { id }, data: { status: true } });
  }
}
