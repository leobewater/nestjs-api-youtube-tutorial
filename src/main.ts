import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // stripping out elements not defined in dto if passed from request
      whitelist: true,
    }),
  );
  await app.listen(3333);
}
bootstrap();
