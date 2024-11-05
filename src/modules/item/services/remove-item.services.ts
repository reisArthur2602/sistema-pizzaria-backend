import { NotFoundError } from "../../../shared/helpers/errors";
import { ItemRepository } from "../item.repository";
import { IItemRepository } from "../item.types";

export class RemoveItemService {
  constructor() {
    this.itemRepository = new ItemRepository();
  }

  private itemRepository: IItemRepository;

  async execute(id: string) {
    const item = await this.itemRepository.findById(id);

    if (!item) {
      throw new NotFoundError("O item não foi encontrado");
    }

    await this.itemRepository.remove(id);
  }
}
