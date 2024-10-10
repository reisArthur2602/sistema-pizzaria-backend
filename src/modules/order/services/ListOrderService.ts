import { IOrderRepository } from "../repositories/IOrderRepository";
import { OrderRepository } from "../repositories/OrderRepository";

export class ListOrderService {
  constructor() {
    this.orderRepository = new OrderRepository();
  }
  private orderRepository: IOrderRepository;

  async execute() {
    return await this.orderRepository.list();
  }
}
