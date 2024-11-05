import { ProductResponse } from "../product/product.types";

export type ItemRequest = {
  order_id: string;
  product_id: string;
  quantity: number;
};

export type ItemResponse = {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  created_at: Date;
  product: ProductResponse;
};

export interface IItemRepository {
  create(data: ItemRequest): Promise<void>;
  findById(id: string): Promise<ItemResponse | null>;
  updateQuantity(id: string, quantity: number): Promise<void>;
  remove(id: string): Promise<void>;
}
