import { NotFoundError } from "../../../shared/helpers/errors";
import { IOrderRepository } from "../order.types";
import { OrderRepository } from "../order.repository";

export class FinishOrderService {
  constructor() {
    this.orderRepository = new OrderRepository();
  }
  private orderRepository: IOrderRepository;

  async execute(id: string) {
    const order = await this.orderRepository.findById(id);

    if (!order) {
      throw new NotFoundError("O pedido não foi encontrado");
    }

    await this.orderRepository.finish(id);
  }
}
