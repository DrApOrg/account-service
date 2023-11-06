import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginAccountDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export interface LoginResponse {
  token: string;
}
