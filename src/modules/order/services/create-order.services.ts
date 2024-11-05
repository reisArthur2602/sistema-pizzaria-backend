import { ConflictError } from "../../../shared/helpers/errors";
import { IOrderRepository } from "../order.types";
import { OrderRepository } from "../order.repository";

export class CreateOrderService {
  constructor() {
    this.orderRepository = new OrderRepository();
  }
  private orderRepository: IOrderRepository;

  async execute(table: number): Promise<{ id: string }> {
    const order = await this.orderRepository.findByTable(table);

    if (order) {
      throw new ConflictError(`A mesa ${table} já está em uso`);
    }

    const { id } = await this.orderRepository.create(table);

    return { id };
  }
}
