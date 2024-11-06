import { NotFoundError } from "../../../shared/helpers/errors";
import { IOrderRepository } from "../order.types";
import { OrderRepository } from "../order.repository";
import { ORDER_MESSAGES } from "../order.messages";

export class ShowOrderService {
  constructor() {
    this.orderRepository = new OrderRepository();
  }
  private orderRepository: IOrderRepository;

  async execute(id: string) {
    const order = await this.orderRepository.findById(id);

    if (!order) {
      throw new NotFoundError(ORDER_MESSAGES.ORDER_NOT_FOUND);
    }

    return order;
  }
}
