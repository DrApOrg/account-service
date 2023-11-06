import { Injectable } from '@nestjs/common';
import { AuthenticationService } from 'src/core/authentication/authentication.service';
import { AccountRepository } from 'src/datasource/account/account.datasource';
import { LoginAccountDto } from './login-account.dto';

@Injectable()
export class LoginAccountUseCase {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly authenticationService: AuthenticationService,
  ) {}

  async execute(loginAccountDto: LoginAccountDto) {
    const user = await this.accountRepository.findBy({
      email: loginAccountDto.email,
    });
    console.log(user);

    const token = await this.authenticationService.execute(user.email);

    return { token };
  }
}
