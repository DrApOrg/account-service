import { HttpException, Injectable } from '@nestjs/common';
import * as bcrpyt from 'bcrypt';
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

    if (user === null) {
      throw Error('email o contraseña incorrecto');
    }

    const isValidate = await bcrpyt.compare(
      loginAccountDto.password,
      user.password,
    );

    console.log({ isValidate });
    if (!isValidate) {
      throw new HttpException('email o contraseña incorrecto', 403);
    }

    const token = await this.authenticationService.execute(user.email);
    return { token };
  }
}
