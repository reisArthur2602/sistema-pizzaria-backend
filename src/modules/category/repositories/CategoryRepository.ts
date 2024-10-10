import { db } from "../../../shared/database/prisma-connection";
import { ICategoryRepository, ICategoryResponse } from "./ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {
  async findByName(name: string): Promise<ICategoryResponse | null> {
    return await db.category.findUnique({
      where: { name },
      include: { Product: true },
    });
  }
  async findById(id: string): Promise<ICategoryResponse | null> {
    return await db.category.findUnique({
      where: { id },
      include: { Product: true },
    });
  }

  async create(name: string): Promise<void> {
    await db.category.create({ data: { name } });
  }

  async list(): Promise<ICategoryResponse[] | []> {
    return await db.category.findMany({ include: { Product: true } });
  }
}
