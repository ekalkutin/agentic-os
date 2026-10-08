#!/usr/bin/env -S node
import type { Contract as End } from "../../snapshots/ae7440e56ba19d39b15e249c90334ace9827e25ad65142e6792c44b61e73cd6e/contract";
import endContract from "../../snapshots/ae7440e56ba19d39b15e249c90334ace9827e25ad65142e6792c44b61e73cd6e/contract.json" with { type: "json" };
import {
  Migration,
  MigrationCLI,
  col,
  primaryKey,
} from "@prisma/orm-postgres/migration";

export default class M extends Migration<never, End> {
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createSchema({ schema: "public" }),
      this.createTable({
        schema: "public",
        table: "Agent",
        columns: [
          col("id", "uuid", {
            notNull: true,
            codecRef: { codecId: "pg/uuid@1" },
          }),
        ],
        constraints: [primaryKey(["id"])],
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
