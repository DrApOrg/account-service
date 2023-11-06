import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Account } from 'src/core/interfaces/account';

export enum AccountType {
  BUSINESS = '1',
  CUSTOMER = '2',
}

@Schema({ collection: 'account' })
export class AccountEntity implements Omit<Account, 'orders'> {
  _id?: string;
  @Prop({
    type: String,
    enum: AccountType,
    default: '2',
  })
  accountType: AccountType;

  @Prop({ type: String })
  image: string;

  @Prop({ type: String })
  lastName: string;

  @Prop({ type: String })
  firstName: string;

  @Prop({ type: String })
  businesName: string;

  @Prop({ type: String })
  dni: string;

  @Prop({ type: String })
  birthDay: string;

  @Prop({ type: String, required: true })
  phone: string;

  @Prop({ type: String, required: true })
  email: string;

  @Prop({ type: String, required: true })
  password: string;
}

export const AccountSchema = SchemaFactory.createForClass(AccountEntity);
