import {
  IProductIncludesCategoryResponse,
  IProductRepository,
  IProductResponse,
} from "../repositories/IProductRepository";
import { ProductRepository } from "../repositories/ProductRepository";

export class ListProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }
  private productRepository: IProductRepository;

  async execute(): Promise<IProductIncludesCategoryResponse[] | []> {
    return await this.productRepository.list();
  }
}
