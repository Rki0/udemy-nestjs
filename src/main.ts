import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { MessagesModule } from './messages/messages.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);

  // set global pipe
  // pipe === input validator => using Data Transfer Object(DTO)
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
