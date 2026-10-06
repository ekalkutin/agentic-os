import { Agent } from "../../domain/entities/index.js";

export abstract class AgentRepository {
  abstract find(): Promise<Agent[]>;
}
