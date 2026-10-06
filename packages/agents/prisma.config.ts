import path from "node:path";
import { config } from "dotenv";
import { definePrismaConfig } from "@prisma/cli-engine";
import { defineConfig as ormConfig } from "@prisma/orm-postgres/config";

config({
  path: path.resolve(import.meta.dirname, "../../.env"),
  quiet: true,
});

const {
  POSTGRES_HOST = "localhost",
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT = "5432",
} = process.env;

export default definePrismaConfig({
  orm: ormConfig({
    contract: "./src/infrastructure/persistence/models/*.prisma",
    output: "./src/infrastructure/persistence/models/generated",
    migrations: { dir: "./src/infrastructure/persistence/models/migrations" },
    db: {
      connection: `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`,
    },
  }),
});
