import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: 'https://dev-economy.vercel.app',
    credentials: true,
    methods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE'],
  });

  await app.listen(8080);
}
bootstrap();
