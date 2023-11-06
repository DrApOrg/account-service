import { AccountType } from 'src/datasource/account/entities/account.entity';
import { Order } from './order';

export interface Account {
  accountType: AccountType;
  image: string;
  lastName: string;
  firstName: string;
  businesName: string;
  dni: string;
  birthDay: string;
  phone: string;
  email: string;
  password: string;
  orders?: Order[];
}
