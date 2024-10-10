import { IProductResponse } from "../../product/repositories/IProductRepository";

export interface ICategoryResponse {
  id: string;
  name: string;
  created_at: Date;
  Product: IProductResponse[] | [];
}

export interface ICategoryRepository {
  findByName(name: string): Promise<ICategoryResponse | null>;
  findById(id: string): Promise<ICategoryResponse | null>;
  create(name: string): Promise<void>;
  list(): Promise<ICategoryResponse[] | []>;
}
