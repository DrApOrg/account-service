import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CoreModule } from './core/core.module';
import { FindAccountModule } from './features/find-account/find-account.module';
import { LoginACcountModule } from './features/login-account/login-account.module';
import { RegisterAccountModule } from './features/register-account/register-account.module';
import { UploadImageModule } from './features/upload-image/upload-image.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/tshop'),
    CoreModule,
    /*
     * features
     */
    FindAccountModule,
    RegisterAccountModule,
    LoginACcountModule,
    UploadImageModule,
  ],
  providers: [],
  exports: [],
})
export class AppModule {}
