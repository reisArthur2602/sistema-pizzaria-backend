import { ConflictError } from "../../../shared/helpers/errors";
import { CategoryRepository } from "../category.repository";
import { ICategoryRepository } from "../category.types";

export class CreateCategoryService {
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }
  private categoryRepository: ICategoryRepository;

  async execute(name: string): Promise<void> {
    const category = await this.categoryRepository.findByName(name);

    if (category) {
      throw new ConflictError("Este nome já está associado a uma categoria");
    }

    await this.categoryRepository.create(name);
  }
}
