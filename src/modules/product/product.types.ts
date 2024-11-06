export type ProductResponse = {
  id: string;
  name: string;
  category_id: string;
  description: string;
  image_url: string;
  price: number;
  created_at: Date;
  category?: {
    name: string;
    id: string;
    created_at: Date;
  };
};

export type ProductRequest = {
  category_id: string;
  name: string;
  description: string;
  image_url: string;
  price: number;
};

export interface IProductRepository {
  create(data: ProductRequest): Promise<void>;
  delete(id: string): Promise<void>;
  list(): Promise<ProductResponse[] | []>;
  findByName(name: string): Promise<ProductResponse | null>;
  findById(id: string): Promise<ProductResponse | null>;
}
