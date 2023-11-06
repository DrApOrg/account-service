import { Module } from '@nestjs/common';
import { UploadImageHttpController } from './upload-image.http.controller';
import { UploadImageUseCase } from './upload-image.use-case';

@Module({
  controllers: [UploadImageHttpController],
  providers: [UploadImageUseCase],
})
export class UploadImageModule {}
