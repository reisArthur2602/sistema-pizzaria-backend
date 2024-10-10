export interface IProductResponse {
  id: string;
  name: string;
  category_id: string;
  description: string;
  image_url: string;
  price: number;
  created_at: Date;
}
export interface IProductRequest {
  category_id: string;
  name: string;
  description: string;
  image_url: string;
  price: number;
}

export interface IProductRepository {
  findByName(name: string): Promise<IProductResponse | null>;
  findById(id: string): Promise<IProductResponse | null>;
  create(data: IProductRequest): Promise<void>;
}

