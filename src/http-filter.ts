import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = request.statusCode || 402;
    console.log(instanceof exception);
    response.status(status).json({
      data: exception.getResponse(),
      timestamp: new Date().toISOString(),
      ok: false,
    });
  }
}
