import { db } from "../../shared/database/prisma-connection";
import {
  IProductRepository,
  ProductIncludesCategoryResponse,
  ProductRequest,
  ProductResponse,
} from "./product.types";

export class ProductRepository implements IProductRepository {
  async findByName(name: string): Promise<ProductResponse | null> {
    return await db.product.findUnique({ where: { name } });
  }

  async findById(id: string): Promise<ProductResponse | null> {
    return await db.product.findUnique({ where: { id } });
  }
  async create(data: ProductRequest): Promise<void> {
    await db.product.create({ data });
  }
  async list(): Promise<ProductIncludesCategoryResponse[] | []> {
    return await db.product.findMany({
      include: { category: true },
      orderBy: { created_at: "desc" },
    });
  }

  async delete(id: string): Promise<void> {
    await db.product.delete({ where: { id } });
  }
}
