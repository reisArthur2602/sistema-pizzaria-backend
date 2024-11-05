import { IOrderRepository } from "../order.types";
import { OrderRepository } from "../order.repository";

export class ListOrderInProductionService {
  constructor() {
    this.orderRepository = new OrderRepository();
  }
  private orderRepository: IOrderRepository;

  async execute() {
    return await this.orderRepository.listInProduction();
  }
}
