import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('APP_PORT');

  await app.listen(port);

  console.info(`Server up and running on ${port} port`);
}

bootstrap().catch((e: Error) => console.error(e));
