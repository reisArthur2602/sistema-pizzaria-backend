import { ProductRepository } from "../product.repository";
import { IProductRepository, ProductResponse } from "../product.types";

export class ListProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }
  private productRepository: IProductRepository;

  async execute(): Promise<ProductResponse[] | []> {
    return await this.productRepository.list();
  }
}
