import path from "node:path";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AgentsModule } from "@agentic-os/agents";

import { EnvironmentSchema } from "./infrastructure/config.schema.js";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.resolve(import.meta.dirname, "../../../.env"),
      validate: (config) => EnvironmentSchema.parse(config),
    }),
    AgentsModule,
  ],
})
export class ServerModule {}
