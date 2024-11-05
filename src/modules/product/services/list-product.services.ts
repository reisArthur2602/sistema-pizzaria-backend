import { ProductRepository } from "../product.repository";
import {
  IProductRepository,
  ProductIncludesCategoryResponse,
} from "../product.types";

export class ListProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }
  private productRepository: IProductRepository;

  async execute(): Promise<ProductIncludesCategoryResponse[] | []> {
    return await this.productRepository.list();
  }
}
