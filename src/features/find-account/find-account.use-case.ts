import { Injectable } from '@nestjs/common';
import { ClientOrderService } from 'src/core/client-order/client-order.service';
import { Account } from 'src/core/interfaces/account';
import { AccountRepository } from 'src/datasource/account/account.datasource';

@Injectable()
export class FindAccountUseCase {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly orderService: ClientOrderService,
  ) {}

  async execute(email: string): Promise<Account> {
    const accountEntity = await this.accountRepository.findBy({ email });

    console.log(accountEntity);
    const orders = await this.orderService.findOrderByUserId(
      accountEntity._id.toString(),
    );

    return {
      accountType: accountEntity.accountType,
      image: accountEntity.image,
      lastName: accountEntity.lastName,
      firstName: accountEntity.firstName,
      businesName: accountEntity.businesName,
      dni: accountEntity.dni,
      birthDay: accountEntity.birthDay,
      phone: accountEntity.phone,
      email: accountEntity.email,
      password: accountEntity.password,
      orders: orders,
    };
  }
}
