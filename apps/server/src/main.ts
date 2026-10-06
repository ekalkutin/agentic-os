import { NestFactory } from "@nestjs/core";
import { ServerModule } from "./server.module.js";

async function bootstrap() {
  const app = await NestFactory.create(ServerModule);
  await app.listen(3000);
}

bootstrap();
