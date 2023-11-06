import { Body, Controller, Post } from '@nestjs/common';
import { LoginAccountDto, LoginResponse } from './login-account.dto';
import { LoginAccountUseCase } from './login-account.use-case';

@Controller('account')
export class LoginAccountHttpController {
  constructor(private readonly loginAccountUseCase: LoginAccountUseCase) {}

  @Post('login')
  async execute(
    @Body() loginAccountDto: LoginAccountDto,
  ): Promise<LoginResponse> {
    return await this.loginAccountUseCase.execute(loginAccountDto);
  }
}
