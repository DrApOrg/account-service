import { HttpException, Injectable } from '@nestjs/common';
import { genSalt, hash } from 'bcrypt';
import { AuthenticationService } from 'src/core/authentication/authentication.service';
import { Account } from 'src/core/interfaces/account';
import { AccountRepository } from 'src/datasource/account/account.datasource';

@Injectable()
export class RegisterACcountUseCase {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly authenticationService: AuthenticationService,
  ) {}

  async execute(account: Account) {
    const isAccountExists = await this.verifiedPhone(account.phone);
    if (isAccountExists) {
      throw new HttpException('phone is already registered!', 404);
    }

    const salt = await genSalt(10);
    // hasing password
    account.password = await hash(account.password, salt);

    // continuar con registro
    this.accountRepository.createAccount(account);
  }

  private async verifiedPhone(phone: string): Promise<Boolean> {
    const account = await this.accountRepository.findBy({ phone });
    return account !== null;
  }
}
