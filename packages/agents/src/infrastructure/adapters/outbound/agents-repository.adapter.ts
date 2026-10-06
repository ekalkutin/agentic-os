import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { AgentRepository } from "../../../application/ports/agent.repository.js";
import { Agent } from "../../../domain/entities/agent.js";
import { DATABASE, type Database } from "../../persistence/prisma.js";

@Injectable()
export class AgentRepositoryAdapter implements AgentRepository, OnModuleInit {
  constructor(@Inject(DATABASE) private readonly db: Database) {}

  public async find(): Promise<Agent[]> {
    const rows = await this.db.orm.public.Agent.all();
    return rows.map((row) => new Agent(row.id));
  }

  public async onModuleInit(): Promise<void> {
    const items = await this.find();
    console.log(items);
  }
}
