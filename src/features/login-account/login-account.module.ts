import { Module } from '@nestjs/common';
import { AccountDatasourceModule } from 'src/datasource/account/account.repository.module';
import { LoginAccountHttpController } from './login-account.http.controller';
import { LoginAccountUseCase } from './login-account.use-case';

@Module({
  imports: [AccountDatasourceModule],
  controllers: [LoginAccountHttpController],
  providers: [LoginAccountUseCase],
  exports: [],
})
export class LoginACcountModule {}
