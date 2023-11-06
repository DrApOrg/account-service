import { Module } from '@nestjs/common';
import { AccountDatasourceModule } from '../../datasource/account/account.repository.module';
import { RegisterAccountHttpController } from './register-account.http.controller';
import { RegisterACcountUseCase } from './register-account.use-case';

@Module({
  imports: [AccountDatasourceModule],
  controllers: [RegisterAccountHttpController],
  providers: [RegisterACcountUseCase],
  exports: [RegisterACcountUseCase],
})
export class RegisterAccountModule {}
