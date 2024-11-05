import { NotFoundError } from "../../../shared/helpers/errors";
import { CategoryRepository } from "../category.repository";
import { ICategoryRepository } from "../category.types";


export class DeleteCategoryService {
  constructor() {
    this.categoryRepository = new CategoryRepository();
  }
  private categoryRepository: ICategoryRepository;

  async execute(id: string): Promise<void> {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new NotFoundError("A categoria não foi encontrada!");
    }

    await this.categoryRepository.delete(id);
  }
}
