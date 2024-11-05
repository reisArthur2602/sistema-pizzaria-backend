import { IItemResponse } from "../item/repositories/IItemRepository";

export type OrderResponse = {
  id: string;
  table: number;
  status: boolean;
  draft: boolean;
  created_at: Date;
  Item: IItemResponse[] | [];
};

export interface IOrderRepository {
  findByTable(table: number): Promise<OrderResponse | null>;
  findById(id: string): Promise<OrderResponse | null>;
  listAll(): Promise<OrderResponse[] | []>;
  listInProduction(): Promise<OrderResponse[] | []>;
  listInProductionCurrent(): Promise<OrderResponse[] | []>;
  create(table: number): Promise<{ id: string }>;
  remove(id: string): Promise<void>;
  send(id: string): Promise<void>;
  finish(id: string): Promise<void>;
}
