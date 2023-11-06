import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { EncryptionService } from '../encryption/encryption.service';

@Injectable()
export class ResolveBearerHeader implements NestInterceptor {
  constructor(
    private readonly jwtService: JwtService,
    private readonly encryptionService: EncryptionService,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];

    if (token && token.startsWith('Bearer ')) {
      const tokenValue = token.slice(7);

      try {
        const decoded = this.jwtService.verify(tokenValue);

        const user = this.encryptionService.base64DesEncrypt(decoded.data);

        request.user = JSON.parse(user);

        return next.handle();
      } catch (error) {
        throw new UnauthorizedException('Token no válido');
      }
    }

    throw new UnauthorizedException(
      'Token no encontrado en el encabezado de autorización',
    );
  }
}
