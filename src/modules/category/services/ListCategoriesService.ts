import { CategoryRepository } from "../repositories/CategoryRepository";
import {
  ICategoryRepository,
  ICategoryResponse,
} from "../repositories/ICategoryRepository";

export class ListCategoryService {
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }
  private categoryRepository: ICategoryRepository;

  async execute(): Promise<ICategoryResponse[] | []> {
    return await this.categoryRepository.list();
  }
}
