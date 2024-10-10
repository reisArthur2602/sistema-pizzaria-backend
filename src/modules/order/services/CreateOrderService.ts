import { ConflictError } from "../../../shared/helpers/errors";
import { IOrderRepository } from "../repositories/IOrderRepository";
import { OrderRepository } from "../repositories/OrderRepository";

export class CreateOrderService {
  constructor() {
    this.orderRepository = new OrderRepository();
  }
  private orderRepository: IOrderRepository;

  async execute(table: number) {
    const order = await this.orderRepository.findByTable(table);
    
    if (order) {
      throw new ConflictError(`A mesa ${table} já está em uso`);
    }

    await this.orderRepository.create(table);
  }
}
