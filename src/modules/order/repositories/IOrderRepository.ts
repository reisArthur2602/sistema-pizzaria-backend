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
  list(): Promise<IOrderResponse[] | []>;
  create(table: number): Promise<void>;
  remove(id: string): Promise<void>;
  send(id: string): Promise<void>;
  finish(id: string): Promise<void>;
}
