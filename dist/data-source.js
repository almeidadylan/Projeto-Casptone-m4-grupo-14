"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
require("dotenv").config({ path: path_1.default.resolve(__dirname, "../.env") });
exports.AppDataSource = process.env.NODE_ENV === "test"
    ? new typeorm_1.DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/models/*.ts"],
        synchronize: true,
    })
    : new typeorm_1.DataSource({
        type: "postgres",
        host: "localhost",
        url: process.env.DATABASE_URL,
        synchronize: false,
        logging: true,
        ssl: process.env.NODE_ENV === "production"
            ? { rejectUnauthorized: false }
            : false,
        entities: process.env.NODE_ENV === "production"
            ? ["dist/src/models/*.js"]
            : ["src/models/*.ts"],
        migrations: process.env.NODE_ENV === "production"
            ? ["dist/src/migrations/*.js"]
            : ["src/migrations/*.ts"],
    });
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Data Source Inicialized");
})
    .catch((err) => {
    console.error("Error during Data Source Initialization", err);
});
// Gerar tabelas no banco de dados yarn typeorm migration:run -d src/data-source.ts
