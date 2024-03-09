import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformInterceptor } from './transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Whenever NestJs encounters any of the validation decorators, it will execute validation Pipes
  app.useGlobalInterceptors(new TransformInterceptor());

  await app.listen(3000);
}
bootstrap();
