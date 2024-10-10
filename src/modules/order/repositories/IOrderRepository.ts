export interface IOrderResponse {
  id: string;
  table: number;
  status: boolean;
  draft: boolean;
  created_at: Date;
}

export interface IOrderRepository {
  create(table: number): Promise<void>;
  findByTable(table: number): Promise<IOrderResponse | null>;
}
