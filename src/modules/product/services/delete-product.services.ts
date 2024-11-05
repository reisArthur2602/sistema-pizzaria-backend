import { NotFoundError } from "../../../shared/helpers/errors";

import { ProductRepository } from "../product.repository";
import { IProductRepository } from "../product.types";

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
