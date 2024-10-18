import { db } from "../../../shared/database/prisma-connection";
import {
  IProductIncludesCategoryResponse,
  IProductRepository,
  IProductRequest,
  IProductResponse,
} from "./IProductRepository";

export class ProductRepository implements IProductRepository {
  async findByName(name: string): Promise<IProductResponse | null> {
    return await db.product.findUnique({ where: { name } });
  }

  async findById(id: string): Promise<IProductResponse | null> {
    return await db.product.findUnique({ where: { id } });
  }
  async create(data: IProductRequest): Promise<void> {
    await db.product.create({ data });
  }
  async list(): Promise<IProductIncludesCategoryResponse[] | []> {
    return await db.product.findMany({ include: { category: true } });
  }
}
