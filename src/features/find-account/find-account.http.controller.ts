import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { Request } from 'express';
import { Account } from 'src/core/interfaces/account';
import { JwtAuthGuard } from 'src/guard/jwt-auth-guard';
import { FindAccountUseCase } from './find-account.use-case';

@Controller('account')
export class FindAccountHttpController {
  constructor(private readonly findAccountUseCase: FindAccountUseCase) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('/profile')
  async execute(@Req() request: Request): Promise<Account> {
    console.log(request.headers.authorization);
    return null;
    // return await this.findAccountUseCase.execute(request.user.email);
  }
}
