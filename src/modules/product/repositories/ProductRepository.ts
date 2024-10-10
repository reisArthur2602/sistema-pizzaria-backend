import { db } from "../../../shared/database/prisma-connection";
import { IProductRepository, IProductRequest, IProductResponse } from "./IProductRepository";

export class ProductRepository implements IProductRepository {
  async findByName(name: string): Promise<IProductResponse | null> {
    return await db.product.findUnique({ where: { name } });
  }
  async create(data: IProductRequest): Promise<void> {
    await db.product.create({ data });
  }
}
