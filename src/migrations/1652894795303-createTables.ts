import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1652894795303 implements MigrationInterface {
  name = "createTables1652894795303";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "category" ("id" uuid NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL, "name" character varying NOT NULL, "CPF" character varying NOT NULL, "birth_date" character varying NOT NULL, "phone" character varying NOT NULL, "pix" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "music" ("id" uuid NOT NULL, "name" character varying NOT NULL, "url" character varying NOT NULL, "description" character varying NOT NULL, "id_user" integer NOT NULL, "id_category" integer NOT NULL, CONSTRAINT "PK_c92b010dd889692dd54286f75e2" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "music"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "category"`);
  }
}

//OBS: as tabelas não possuem chaves estrangeiras (não consegui fazer funcionar)
