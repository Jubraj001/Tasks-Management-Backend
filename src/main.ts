import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Whenever NestJs encounters any of the validation decorators, it will execute validation Pipes

  await app.listen(3000);
}
bootstrap();
