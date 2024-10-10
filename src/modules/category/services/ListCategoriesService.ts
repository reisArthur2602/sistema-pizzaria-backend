import { CategoryRepository } from "../repositories/CategoryRepository";
import {
  ICategoryIncludesProductsResponse,
  ICategoryRepository,
} from "../repositories/ICategoryRepository";

export class ListCategoryService {
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }
  private categoryRepository: ICategoryRepository;

  async execute(): Promise<ICategoryIncludesProductsResponse[] | []> {
    return await this.categoryRepository.list();
  }
}
