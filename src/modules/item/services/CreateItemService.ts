import { NotFoundError } from "../../../shared/helpers/errors";
import { IOrderRepository } from "../../order/repositories/IOrderRepository";
import { OrderRepository } from "../../order/repositories/OrderRepository";
import { IProductRepository } from "../../product/repositories/IProductRepository";
import { ProductRepository } from "../../product/repositories/ProductRepository";
import { IItemRepository, IItemRequest } from "../repositories/IItemRepository";
import { ItemRepository } from "../repositories/ItemRepository";

export class CreateItemService {
  constructor() {
    this.orderRepository = new OrderRepository();
    this.productRepository = new ProductRepository();
    this.itemRepository = new ItemRepository();
  }
  private orderRepository: IOrderRepository;
  private productRepository: IProductRepository;
  private itemRepository: IItemRepository;

  async execute(data: IItemRequest) {
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
