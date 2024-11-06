import { ConflictError } from "../../../shared/helpers/errors";
import { CATEGORY_MESSAGES } from "../category.messages";
import { CategoryRepository } from "../category.repository";
import { ICategoryRepository } from "../category.types";

export class CreateCategoryService {
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }
  private categoryRepository: ICategoryRepository;

  async execute(name: string): Promise<void> {
    const hasCategoryWithName = await this.categoryRepository.findByName(name);

    if (hasCategoryWithName) {
      throw new ConflictError(CATEGORY_MESSAGES.NAME_ALREADY_ASSOCIATED);
    }

    await this.categoryRepository.create(name);
  }
}
