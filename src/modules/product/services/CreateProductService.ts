import { ConflictError, NotFoundError } from "../../../shared/helpers/errors";
import { CategoryRepository } from "../../category/repositories/CategoryRepository";
import { ICategoryRepository } from "../../category/repositories/ICategoryRepository";
import {
  IProductRepository,
  IProductRequest,
} from "../repositories/IProductRepository";
import { ProductRepository } from "../repositories/ProductRepository";

export class CreateProductService {
  constructor() {
    this.productRepository = new ProductRepository();
    this.categoryRepository = new CategoryRepository();
  }
  private productRepository: IProductRepository;
  private categoryRepository: ICategoryRepository;

  async execute(data: IProductRequest): Promise<void> {
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
