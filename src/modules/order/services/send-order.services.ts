import { BadRequestError, NotFoundError } from "../../../shared/helpers/errors";
import { IOrderRepository } from "../order.types";
import { OrderRepository } from "../order.repository";

export class SendOrderService {
  constructor() {
    this.orderRepository = new OrderRepository();
  }
  private orderRepository: IOrderRepository;

  async execute(id: string) {
    const order = await this.orderRepository.findById(id);

    if (!order) {
      throw new NotFoundError("O pedido não foi encontrado");
    }

    if (order.Item.length === 0) {
      throw new BadRequestError("Adicione items ao seu pedido");
    }

    await this.orderRepository.send(id);
  }
}
