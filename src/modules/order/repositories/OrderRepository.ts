import { db } from "../../../shared/database/prisma-connection";
import { IOrderRepository, IOrderResponse } from "./IOrderRepository";

export class OrderRepository implements IOrderRepository {
  async create(table: number): Promise<void> {
    await db.order.create({ data: { table } });
  }

  async findByTable(table: number): Promise<IOrderResponse | null> {
    return await db.order.findFirst({
      where: {
        AND: [{ table: table }, { status: false }],
      },
    });
  }
}
