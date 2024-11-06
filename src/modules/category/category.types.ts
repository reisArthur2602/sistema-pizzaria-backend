import { ProductResponse } from "../product/product.types";

export type CategoryResponse = {
  id: string;
  name: string;
  created_at: Date;
  Product?: ProductResponse[] | [];
};

export interface ICategoryRepository {
  findByName(name: string): Promise<CategoryResponse | null>;
  findById(id: string): Promise<CategoryResponse | null>;
  delete(id: string): Promise<void>;
  create(name: string): Promise<void>;
  edit(id: string, name: string): Promise<void>;
  list(): Promise<CategoryResponse[] | []>;
}
