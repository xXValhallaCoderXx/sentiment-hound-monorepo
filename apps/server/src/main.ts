import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.log("SERVER ENVIRONENT", process.env.NODE_ENV);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
