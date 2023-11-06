import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AccountEntity } from './entities/account.entity';

@Injectable()
export class AccountRepository {
  constructor(
    @InjectModel(AccountEntity.name)
    private accountRepository: Model<AccountEntity>,
  ) {}

  async findBy(query: any): Promise<AccountEntity> {
    return await this.accountRepository.findOne(query);
  }

  async createAccount(account: AccountEntity): Promise<void> {
    await this.accountRepository.create(account);
  }
}
