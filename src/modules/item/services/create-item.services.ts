import { NotFoundError } from "../../../shared/helpers/errors";
import { IOrderRepository } from "../../order/order.types";
import { OrderRepository } from "../../order/order.repository";
import { IProductRepository } from "../../product/product.types";
import { ProductRepository } from "../../product/product.repository";
import { ItemRepository } from "../item.repository";
import { IItemRepository, ItemRequest } from "../item.types";
import { ITEM_MESSAGES } from "../item.message";

export class CreateItemService {
  constructor() {
    this.orderRepository = new OrderRepository();
    this.productRepository = new ProductRepository();
    this.itemRepository = new ItemRepository();
  }
  private orderRepository: IOrderRepository;
  private productRepository: IProductRepository;
  private itemRepository: IItemRepository;

  async execute(data: ItemRequest) {
    const hasOrderWithId = await this.orderRepository.findById(data.order_id);

    if (!hasOrderWithId) {
      throw new NotFoundError(ITEM_MESSAGES.ORDER_NOT_FOUND);
    }

    const hasProductWithId = await this.productRepository.findById(
      data.product_id
    );

    if (!hasProductWithId) {
      throw new NotFoundError(ITEM_MESSAGES.PRODUCT_NOT_FOUND);
    }

    const productExistInOrder = hasOrderWithId.Item.find(
      (item) => item.product_id === data.product_id
    );

    if (productExistInOrder) {
      return await this.itemRepository.updateQuantity(
        productExistInOrder.id,
        productExistInOrder.quantity + data.quantity
      );
    }

    await this.itemRepository.create(data);
  }
}
