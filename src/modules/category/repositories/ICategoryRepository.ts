export interface ICategoryResponse {
  id: string;
  name: string;
  created_at: Date;
}

export interface ICategoryRepository {
  findByName(name: string): Promise<ICategoryResponse | null>;
  create(name: string): Promise<void>;
}
