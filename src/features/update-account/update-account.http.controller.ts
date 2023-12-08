import { Body, Controller, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { UpdateAccountDto } from './update-account.dto';

@Controller('account')
export class UpdateAccountHttpController {
  constructor() {}

  // @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard)
  @Put('/profile')
  async execute(
    @Req() request: Request,
    @Body() updateAccountDto: UpdateAccountDto,
  ) {
    console.log(request.headers.authorization);
    return;
  }
}
