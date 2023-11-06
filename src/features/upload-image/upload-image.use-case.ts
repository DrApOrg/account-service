import { PutObjectCommand, S3 } from '@aws-sdk/client-s3';
import { HttpException, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class UploadImageUseCase {
  AWS_S3_BUCKET = process.env.AWS_BUCKET_NAME;
  s3 = new S3({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESSKEYID as string,
      secretAccessKey: process.env.AWS_SECRETACCESSKEY as string,
    },
  });
  constructor() {}

  async execute(file: Express.Multer.File): Promise<string> {
    const key = randomUUID();
    try {
      const commnad = new PutObjectCommand({
        Bucket: this.AWS_S3_BUCKET,
        Key: key,
        Body: file.buffer,
      });
      let s3Response = await this.s3.send(commnad);
      console.log(s3Response);

      return `https://${this.AWS_S3_BUCKET}.s3.amazonaws.com/${key}`;
    } catch (e) {
      throw new HttpException('No se pudo subi la image', 404);
    }
  }
}
