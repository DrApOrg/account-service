import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { Order } from '../interfaces/order';

@Injectable()
export class ClientOrderService {
  constructor(@Inject('ORDER_CLIENT') private readonly client: ClientProxy) {}

  async findOrderByUserId(userId: string): Promise<Order[]> {
    return await lastValueFrom(
      this.client.send({ subject: 'order', cmd: 'find-all' }, { userId }),
    );
  }

  async createOrder(order: Order): Promise<Order[]> {
    return await lastValueFrom(
      this.client.send({ subject: 'order', cmd: 'save' }, { order }),
    );
  }
}
