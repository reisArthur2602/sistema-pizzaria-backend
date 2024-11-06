import { db } from "../../shared/database/prisma-connection";
import { CategoryResponse, ICategoryRepository } from "./category.types";

export class CategoryRepository implements ICategoryRepository {
  async findByName(name: string): Promise<CategoryResponse | null> {
    return await db.category.findUnique({
      where: { name },
    });
  }

  async findById(id: string): Promise<CategoryResponse | null> {
    return await db.category.findUnique({
      where: { id },
    });
  }

  async delete(id: string): Promise<void> {
    await db.category.delete({ where: { id } });
  }

  async create(name: string): Promise<void> {
    await db.category.create({ data: { name } });
  }

  async edit(id: string, name: string): Promise<void> {
    await db.category.update({ where: { id }, data: name });
  }

  async list(): Promise<CategoryResponse[] | []> {
    return await db.category.findMany({
      include: { Product: true },
      orderBy: { created_at: "desc" },
    });
  }
}
