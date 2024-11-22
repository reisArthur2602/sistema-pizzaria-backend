import { IOrderRepository, OrderStatus } from "../order.types";
import { OrderRepository } from "../order.repository";

export class ListAllOrderService {
  constructor() {
    this.orderRepository = new OrderRepository();
  }
  private orderRepository: IOrderRepository;

  async execute(status?: OrderStatus) {
    const orders = await this.orderRepository.listAll(status);
    
    return orders;
  }
}
