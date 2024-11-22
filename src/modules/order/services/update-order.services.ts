import { NotFoundError } from "../../../shared/helpers/errors";
import { IOrderRepository, OrderStatus } from "../order.types";
import { OrderRepository } from "../order.repository";
import { ORDER_MESSAGES } from "../order.messages";

export class UpdateOrderService {
  constructor() {
    this.orderRepository = new OrderRepository();
  }
  private orderRepository: IOrderRepository;

  async execute(id: string, status: OrderStatus) {
    const order = await this.orderRepository.findById(id);

    if (!order) {
      throw new NotFoundError(ORDER_MESSAGES.ORDER_NOT_FOUND);
    }

    await this.orderRepository.update(id, status);
  }
}
