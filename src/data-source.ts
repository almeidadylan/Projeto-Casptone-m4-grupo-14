import { DataSource } from "typeorm";
import { Users } from "./entities/user.entity";

require("dotenv").config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PWD,
  database: process.env.POSTGRES_DB,

  synchronize: false,
  logging: true,
  entities: [Users],
  migrations: ["src/migrations/*.ts"],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source Initialized");
  })
  .catch((err) => {
    console.log("Error during Data Source Initialization", err);
  });
