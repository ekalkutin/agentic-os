import { Provider } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { AgentRepositoryAdapter } from "./outbound/agents-repository.adapter.js";
import { AgentRepository } from "../../application/ports/agent.repository.js";
import { DATABASE, db } from "../persistence/prisma.js";

export const REPOSITORIES: Provider[] = [
  {
    provide: DATABASE,
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => {
      await db.connect({ url: config.getOrThrow<string>("database.url") });
      return db;
    },
  },
  {
    provide: AgentRepository,
    useClass: AgentRepositoryAdapter,
  },
];
