import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  const config = app.get<ConfigService>(ConfigService);
  const PORT = config.get<number>('port');
  await app.listen(PORT);
  console.log('Listening in port: ', PORT);
}
bootstrap();
