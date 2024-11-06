import { NotFoundError } from "../../../shared/helpers/errors";
import { ITEM_MESSAGES } from "../item.message";
import { ItemRepository } from "../item.repository";
import { IItemRepository } from "../item.types";

export class RemoveItemService {
  constructor() {
    this.itemRepository = new ItemRepository();
  }

  private itemRepository: IItemRepository;

  async execute(id: string) {
    const hasItemWithId = await this.itemRepository.findById(id);

    if (!hasItemWithId) {
      throw new NotFoundError(ITEM_MESSAGES.ITEM_NOT_FOUND);
    }

    await this.itemRepository.remove(id);
  }
}
