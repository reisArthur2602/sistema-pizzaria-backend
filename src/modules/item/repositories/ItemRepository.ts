import { db } from "../../../shared/database/prisma-connection";
import {
  IItemRepository,
  IItemRequest,
  IItemResponse,
} from "./IItemRepository";

export class ItemRepository implements IItemRepository {
  async findById(id: string): Promise<IItemResponse | null> {
    return await db.item.findUnique({
      where: { id },
      include: { product: true },
    });
  }

  async create(data: IItemRequest): Promise<void> {
    await db.item.create({ data });
  }

  async updateQuantity(id: string, quantity: number): Promise<void> {
    await db.item.update({ where: { id }, data: { quantity } });
  }

  async remove(id: string): Promise<void> {
    await db.item.delete({ where: { id } });
  }
}
