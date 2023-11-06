import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountRepository } from './account.datasource';
import { AccountEntity, AccountSchema } from './entities/account.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AccountEntity.name, schema: AccountSchema },
    ]),
  ],
  providers: [AccountRepository],
  exports: [AccountRepository],
})
export class AccountDatasourceModule {}
