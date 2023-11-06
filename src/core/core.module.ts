import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AccountDatasourceModule } from 'src/datasource/account/account.repository.module';
import { AuthJwtGuard } from './authentication/authentication-jwt.guard';
import { AuthenticationService } from './authentication/authentication.service';
import { ClientOrderService } from './client-order/client-order.service';
import { EncryptionService } from './encryption/encryption.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { TcpClientModule } from './tcp-client/tcp-client.provider';

@Global()
@Module({
  imports: [
    TcpClientModule.register([{ modulName: 'ORDER_CLIENT' }]),
    AccountDatasourceModule,

    // auth module
    PassportModule,
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '18d',
      },
    }),
  ],
  providers: [
    ClientOrderService,
    EncryptionService,
    AuthenticationService,
    JwtStrategy,
    AuthJwtGuard,
  ],
  exports: [
    ClientOrderService,
    EncryptionService,
    AuthenticationService,
    AuthJwtGuard,
  ],
})
export class CoreModule {}
