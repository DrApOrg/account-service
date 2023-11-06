import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountRepository } from 'src/datasource/account/account.datasource';
import { EncryptionService } from '../encryption/encryption.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private accountRepository: AccountRepository,
    private jwtTokenService: JwtService,
    private encryptService: EncryptionService,
  ) {}

  async execute(email: string): Promise<string> {
    const account = await this.accountRepository.findBy({ email });

    const encryptAccount = this.encryptService.base64Encrypt(
      JSON.stringify(account),
    );

    const token = this.jwtTokenService.sign({
      data: encryptAccount,
    });

    return token;
  }
}
