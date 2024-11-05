import { NotFoundError } from "../../../shared/helpers/errors";
import { IOrderRepository } from "../../order/order.types";
import { OrderRepository } from "../../order/order.repository";
import { IProductRepository } from "../../product/product.types";
import { ProductRepository } from "../../product/product.repository";
import { ItemRepository } from "../item.repository";
import { IItemRepository, ItemRequest } from "../item.types";

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
    const order = await this.orderRepository.findById(data.order_id);

    if (!order) {
      throw new NotFoundError("O pedido não foi encontrado");
    }

    const product = await this.productRepository.findById(data.product_id);

    if (!product) {
      throw new NotFoundError("O produto não foi encontrado");
    }

    const findItem = order.Item.find(
      (item) => item.product_id === data.product_id
    );

    if (findItem) {
      return await this.itemRepository.updateQuantity(
        findItem.id,
        findItem.quantity + data.quantity
      );
    }

    await this.itemRepository.create(data);
  }
}
