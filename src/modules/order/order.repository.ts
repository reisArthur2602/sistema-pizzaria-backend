import { endOfDay, startOfDay } from "date-fns";
import { db } from "../../shared/database/prisma-connection";
import { IOrderRepository, OrderResponse } from "./order.types";

export class OrderRepository implements IOrderRepository {
  async listAll(): Promise<OrderResponse[] | []> {
    return await db.order.findMany({
      where: { draft: false },
      include: { Item: { include: { product: true } } },
      orderBy: { created_at: "asc" },
    });
  }

  async listInProduction(): Promise<OrderResponse[] | []> {
    const current = new Date();

    return await db.order.findMany({
      where: {
        AND: [
          { status: false, draft: false },
          {
            created_at: {
              gte: startOfDay(current) && current,
              lte: endOfDay(current),
            },
          },
        ],
      },
      include: { Item: { include: { product: true } } },
      orderBy: { created_at: "desc" },
    });
  }

  async findByTable(table: number): Promise<OrderResponse | null> {
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

  async findById(id: string): Promise<OrderResponse | null> {
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

  async create(table: number): Promise<{ id: string }> {
    const { id } = await db.order.create({ data: { table } });
    return { id };
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
