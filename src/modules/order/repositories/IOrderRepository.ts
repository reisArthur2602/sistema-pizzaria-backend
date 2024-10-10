export interface IOrderResponse {
  id: string;
  table: number;
  status: boolean;
  draft: boolean;
  created_at: Date;
}

export interface IOrderRepository {
  findByTable(table: number): Promise<IOrderResponse | null>;
  findById(id: string): Promise<IOrderResponse | null>;
  create(table: number): Promise<void>;
  remove(id: string): Promise<void>;
  send(id: string): Promise<void>;
  finish(id: string): Promise<void>;
}
