import { Injectable } from '@nestjs/common';

@Injectable()
export class EncryptionService {
  base64Encrypt(text: any): string {
    return btoa(text);
  }

  base64DesEncrypt(text: any): string {
    return atob(text);
  }
}
