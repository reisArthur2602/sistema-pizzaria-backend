import { ConflictError } from "../../../shared/helpers/errors";
import { CATEGORY_MESSAGES } from "../category.messages";
import { CategoryRepository } from "../category.repository";
import { ICategoryRepository } from "../category.types";

export class EditCategoryService {
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }
  private categoryRepository: ICategoryRepository;

  async execute(id: string, name: string): Promise<void> {
    const hasCategoryWithId = await this.categoryRepository.findById(id);

    if (hasCategoryWithId) {
      throw new ConflictError(CATEGORY_MESSAGES.CATEGORY_NOT_FOUND);
    }

    await this.categoryRepository.edit(id, name);
  }
}
