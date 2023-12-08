import { Injectable } from '@nestjs/common';
import { UpdateAccountDto } from './update-account.dto';

@Injectable()
export class UpdateAccountUseCase {
  constructor() {}

  async execute(account: UpdateAccountDto) {}
}
