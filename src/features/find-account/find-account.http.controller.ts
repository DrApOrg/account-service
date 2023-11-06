import { Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Account } from 'src/core/interfaces/account';
import { JwtAuthGuard } from 'src/guard/jwt-auth-guard';
import { FindAccountUseCase } from './find-account.use-case';

@Controller('account')
export class FindAccountHttpController {
  constructor(private readonly findAccountUseCase: FindAccountUseCase) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/profile')
  async execute(request: any): Promise<Account> {
    return await this.findAccountUseCase.execute(request.user.email);
  }
}
