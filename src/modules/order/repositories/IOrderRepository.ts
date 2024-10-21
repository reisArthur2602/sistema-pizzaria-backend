import { IItemResponse } from "../../item/repositories/IItemRepository";

export interface IOrderResponse {
  id: string;
  table: number;
  status: boolean;
  draft: boolean;
  created_at: Date;
  Item: IItemResponse[] | [];
}

export interface IOrderRepository {
  findByTable(table: number): Promise<IOrderResponse | null>;
  findById(id: string): Promise<IOrderResponse | null>;
  listAll(): Promise<IOrderResponse[] | []>;
  listInProduction(): Promise<IOrderResponse[] | []>;
  listInProductionCurrent(): Promise<IOrderResponse[] | []>;
  create(table: number): Promise<{ id: string }>;
  remove(id: string): Promise<void>;
  send(id: string): Promise<void>;
  finish(id: string): Promise<void>;
}
