
import { ItemResponse } from "../item/item.types";

export type OrderStatus = "DRAFT" | "PRODUCTION" | "COMPLETED"

export type OrderResponse = {
  id: string;
  table: number;
  status: OrderStatus;
  created_at: Date;
  Item: ItemResponse[] | [];
};

export interface IOrderRepository {
  findByTable(table: number): Promise<OrderResponse | null>;
  findById(id: string): Promise<OrderResponse | null>;
  listAll(status?:OrderStatus): Promise<OrderResponse[] | []>;
  create(table: number): Promise<{ id: string }>;
  remove(id: string): Promise<void>;
  update(id: string, status: OrderStatus): Promise<void>;
}
