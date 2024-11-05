import { ConflictError, NotFoundError } from "../../../shared/helpers/errors";

import {
  IProductRepository,
  ProductRequest,

} from "../product.types";
import { ProductRepository } from "../product.repository";
import { CategoryRepository } from "../../category/category.repository";
import { ICategoryRepository } from "../../category/category.types";

export class CreateProductService {
  constructor() {
    this.productRepository = new ProductRepository();
    this.categoryRepository = new CategoryRepository();
  }
  private productRepository: IProductRepository;
  private categoryRepository: ICategoryRepository;

  async execute(data: ProductRequest): Promise<void> {
    const product = await this.productRepository.findByName(data.name);

    if (product) {
      throw new ConflictError("Este nome já está associado a um produto");
    }

    const category = await this.categoryRepository.findById(data.category_id);

    if (!category) {
      throw new NotFoundError("A categoria não foi encontrada");
    }

    await this.productRepository.create(data);
  }
}
