import { DataSource } from "typeorm";

import path from "path";
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PWD,
  database: process.env.POSTGRES_DB,

  synchronize: false,
  logging: true,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source Inicialized");
  })
  .catch((err) => {
    console.error("Error during Data Source Initialization", err);
  });

// Gerar tabelas no banco de dados yarn typeorm migration:run -d src/data-source.ts
