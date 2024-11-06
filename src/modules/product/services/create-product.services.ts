import { ConflictError, NotFoundError } from "../../../shared/helpers/errors";

import { IProductRepository, ProductRequest } from "../product.types";
import { ProductRepository } from "../product.repository";
import { CategoryRepository } from "../../category/category.repository";
import { ICategoryRepository } from "../../category/category.types";
import { PRODUCT_MESSAGES } from "../product.message";

export class CreateProductService {
  constructor() {
    this.productRepository = new ProductRepository();
    this.categoryRepository = new CategoryRepository();
  }
  private productRepository: IProductRepository;
  private categoryRepository: ICategoryRepository;

  async execute(data: ProductRequest): Promise<void> {
    const category = await this.categoryRepository.findById(data.category_id);

    if (!category) {
      throw new NotFoundError(PRODUCT_MESSAGES.PRODUCT_NOT_FOUND);
    }

    const product = await this.productRepository.findByName(data.name);

    if (product) {
      throw new ConflictError(PRODUCT_MESSAGES.NAME_ALREADY_ASSOCIATED);
    }

    await this.productRepository.create(data);
  }
}
