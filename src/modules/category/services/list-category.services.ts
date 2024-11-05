import { CategoryRepository } from "../category.repository";
import { CategoryResponse, ICategoryRepository } from "../category.types";



export class ListCategoryService {
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }
  private categoryRepository: ICategoryRepository;

  async execute(): Promise<CategoryResponse[] | []> {
    return await this.categoryRepository.list();
  }
}
