import { IOrderResponse } from "../../order/repositories/IOrderRepository";
import { IProductResponse } from "../../product/repositories/IProductRepository";

export interface IItemRequest {
  order_id: string;
  product_id: string;
  quantity: number;
}

export interface IItemResponse {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  created_at: Date;
  product: IProductResponse;
}

export interface IItemRepository {
  create(data: IItemRequest): Promise<void>;
  findById(id: string): Promise<IItemResponse | null>;
  updateQuantity(id: string, quantity: number): Promise<void>;
  remove(id: string): Promise<void>;
}
