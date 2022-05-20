import { DataSource } from "typeorm";

import path from "path";
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

export const AppDataSource =  process.env.NODE_ENV === "test"
? new DataSource({
    type: "sqlite",
    database: ":memory:",
    entities: ["src/models/*.ts"],
    synchronize: true,
  })
: new DataSource({
  type: "postgres",
  host: "localhost",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: true,
  ssl:
  process.env.NODE_ENV === "production"
    ? { rejectUnauthorized: false }
    : false,
entities:
  process.env.NODE_ENV === "production"
    ? ["dist/src/models/*.js"]
    : ["src/models/*.ts"],
migrations:
  process.env.NODE_ENV === "production"
    ? ["dist/src/migrations/*.js"]
    : ["src/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source Inicialized");
  })
  .catch((err) => {
    console.error("Error during Data Source Initialization", err);
  });

// Gerar tabelas no banco de dados yarn typeorm migration:run -d src/data-source.ts
