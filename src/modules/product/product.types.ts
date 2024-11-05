export type ProductResponse = {
  id: string;
  name: string;
  category_id: string;
  description: string;
  image_url: string;
  price: number;
  created_at: Date;
};
export type ProductRequest = {
  category_id: string;
  name: string;
  description: string;
  image_url: string;
  price: number;
};

export type ProductIncludesCategoryResponse = {
  id: string;
  name: string;
  category_id: string;
  description: string;
  image_url: string;
  price: number;
  created_at: Date;
  category: {
    name: string;
    id: string;
    created_at: Date;
  };
};

export interface IProductRepository {
  list(): Promise<ProductIncludesCategoryResponse[] | []>;
  findByName(name: string): Promise<ProductResponse | null>;
  findById(id: string): Promise<ProductResponse | null>;
  create(data: ProductRequest): Promise<void>;
  delete(id: string): Promise<void>;
}
