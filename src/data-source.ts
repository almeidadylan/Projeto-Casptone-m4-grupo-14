import { DataSource } from "typeorm";
<<<<<<< HEAD
import { Users } from "./entities/user.entity";

require("dotenv").config();
=======

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
>>>>>>> develop

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PWD,
  database: process.env.POSTGRES_DB,

  synchronize: false,
  logging: true,
<<<<<<< HEAD
  entities: [Users],
=======
  entities: ["src/entities/*.ts"],
>>>>>>> develop
  migrations: ["src/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
<<<<<<< HEAD
    console.log("Data Source Initialized");
  })
  .catch((err) => {
    console.log("Error during Data Source Initialization", err);
  });
=======
    console.log("Data Source Inicialized");
  })
  .catch((err) => {
    console.error("Error during Data Source Initialization", err);
  });

// Gerar tabelas no banco de dados yarn typeorm migration:run -d src/data-source.ts
>>>>>>> develop
