import postgres from "@prisma/orm-postgres/runtime";
import type { Contract } from "./models/generated/contract.js";
import contractJson from "./models/generated/contract.json" with { type: "json" };

export const db = postgres<Contract>({
  contractJson,
});

export type Database = typeof db;
export const DATABASE = Symbol("DATABASE");
