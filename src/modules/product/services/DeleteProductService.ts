import { NotFoundError } from "../../../shared/helpers/errors";
import {
  IProductIncludesCategoryResponse,
  IProductRepository,
} from "../repositories/IProductRepository";
import { ProductRepository } from "../repositories/ProductRepository";

export class DeleteProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }
  private productRepository: IProductRepository;

  async execute(id: string): Promise<void> {
    const category = await this.productRepository.findById(id);

    if (!category) {
      throw new NotFoundError("A categoria não foi encontrada");
    }

    await this.productRepository.delete(id);
  }
}
