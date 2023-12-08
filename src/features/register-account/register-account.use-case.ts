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

  async execute(account: Account): Promise<{ token: string }> {
    const isAccountExists = await this.verifiedPhone(account.phone);
    if (isAccountExists) {
      throw new HttpException('phone is already registered!', 404);
    }

    // get salt
    const salt = await genSalt(10);
    // hasing password
    account.password = await hash(account.password, salt);

    // continuar con registro
    await this.accountRepository.createAccount(account);

    const token = await this.authenticationService.execute(account.email);

    return { token };
  }

  private async verifiedPhone(phone: string): Promise<Boolean> {
    const account = await this.accountRepository.findBy({ phone });
    return account !== null;
  }
}
