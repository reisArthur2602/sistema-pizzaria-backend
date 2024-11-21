import { db } from "../../shared/database/prisma-connection";
import { IOrderRepository, OrderResponse, OrderStatus } from "./order.types";

export class OrderRepository implements IOrderRepository {
  async listAll(status?: OrderStatus): Promise<OrderResponse[] | []> {
    if (status) {
      return await db.order.findMany({
        where: { status },
        include: { Item: { include: { product: true } } },
        orderBy: { created_at: "asc" },
      });
    }

    return await db.order.findMany({
      include: { Item: { include: { product: true } } },
      orderBy: { created_at: "asc" },
    });
  }

  async findByTable(table: number): Promise<OrderResponse | null> {
    return await db.order.findFirst({
      where: {
        AND: [{ table }, { status: "PRODUCTION" }],
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

  async update(id: string, status: OrderStatus): Promise<void> {
    await db.order.update({ where: { id }, data: { status } });
  }
}
