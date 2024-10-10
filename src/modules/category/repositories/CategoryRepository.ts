import { db } from "../../../shared/database/prisma-connection";
import { ICategoryRepository, ICategoryResponse } from "./ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {
  async findByName(name: string): Promise<ICategoryResponse | null> {
    return await db.category.findUnique({ where: { name } });
  }
  async create(name: string): Promise<void> {
    await db.category.create({ data: { name } });
  }
}
