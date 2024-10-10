import { ConflictError, NotFoundError } from "../../../shared/helpers/errors";
import { IOrderRepository } from "../repositories/IOrderRepository";
import { OrderRepository } from "../repositories/OrderRepository";

export class RemoveOrderService {
  constructor() {
    this.orderRepository = new OrderRepository();
  }
  private orderRepository: IOrderRepository;

  async execute(id: string) {
    const order = await this.orderRepository.findById(id);
    
    if (!order) {
      throw new NotFoundError("O pedido não foi encontrado");
    }

    await this.orderRepository.remove(id);
  }
}
