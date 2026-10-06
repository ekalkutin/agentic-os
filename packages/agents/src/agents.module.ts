import { Module } from "@nestjs/common";
import { REPOSITORIES } from "./infrastructure/adapters/index.js";

@Module({
  imports: [],
  providers: [...REPOSITORIES],
})
export class AgentsModule {}
