import { IProductResponse } from "../product/repositories/IProductRepository";

export type CategoryResponse = {
  id: string;
  name: string;
  created_at: Date;
  Product: IProductResponse[] | [];
};

export interface ICategoryRepository {
  findByName(name: string): Promise<CategoryResponse | null>;
  findById(id: string): Promise<CategoryResponse | null>;
  delete(id: string): Promise<void>;
  create(name: string): Promise<void>;
  list(): Promise<CategoryResponse[] | []>;
}
