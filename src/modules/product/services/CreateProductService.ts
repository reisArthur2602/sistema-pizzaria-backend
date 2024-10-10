import { ConflictError } from "../../../shared/helpers/errors";
import {
  IProductRepository,
  IProductRequest,
} from "../repositories/IProductRepository";
import { ProductRepository } from "../repositories/ProductRepository";

export class CreateProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }
  private productRepository: IProductRepository;

  async execute(data: IProductRequest): Promise<void> {
    const product = await this.productRepository.findByName(data.name);

    if (product) {
      throw new ConflictError("Este nome já está associado a um produto");
    }

    await this.productRepository.create(data);
  }
}
