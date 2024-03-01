import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: 'https://dev-economy.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  });

  await app.listen(8080);
}
bootstrap();
