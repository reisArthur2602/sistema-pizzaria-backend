import { IOrderRepository } from "../repositories/IOrderRepository";
import { OrderRepository } from "../repositories/OrderRepository";

export class ListOrderInProductionCurrentService {
  constructor() {
    this.orderRepository = new OrderRepository();
  }
  private orderRepository: IOrderRepository;

  async execute() {
    return await this.orderRepository.listInProductionCurrent();
  }
}
