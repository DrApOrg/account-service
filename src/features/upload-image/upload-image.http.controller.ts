import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadImageUseCase } from './upload-image.use-case';
@Controller('upload')
export class UploadImageHttpController {
  constructor(private readonly uploadImageUseCase: UploadImageUseCase) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async execute(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<{ url: string }> {
    return await this.uploadImageUseCase.execute(file);
  }
}
