import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import {
  AccountEntity,
  AccountType,
} from 'src/datasource/account/entities/account.entity';

export class CreateAccountDto implements Omit<AccountEntity, 'orders'> {
  _id?: string;
  @IsEnum(AccountType)
  accountType: AccountType;

  @IsString()
  @IsOptional()
  image: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsOptional()
  businesName: string;

  @IsString()
  @IsNotEmpty()
  dni: string;

  @IsDateString()
  birthDay: string;

  @IsPhoneNumber('PE')
  phone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
