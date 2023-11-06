import {
  Body,
  Controller,
  Post,
  UseFilters,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/http-filter';
import { CreateAccountDto } from './create-account.dto';
import { RegisterACcountUseCase } from './register-account.use-case';

@Controller('account')
export class RegisterAccountHttpController {
  constructor(private readonly registerAccount: RegisterACcountUseCase) {}

  @UsePipes(ValidationPipe)
  @UseFilters(HttpExceptionFilter)
  @Post('register')
  async execute(@Body() createAccountDto: CreateAccountDto): Promise<void> {
    return await this.registerAccount.execute(createAccountDto);
  }
}
