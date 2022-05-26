import { MigrationInterface, QueryRunner } from "typeorm";

export class musicTable1653508522964 implements MigrationInterface {
    name = 'musicTable1653508522964'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "music" ("id" uuid NOT NULL, "name" character varying NOT NULL, "url" character varying NOT NULL, "letter" character varying, "id_user" integer NOT NULL, "id_category" integer NOT NULL, "userId" uuid, CONSTRAINT "PK_c92b010dd889692dd54286f75e2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "pix"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "users_CPF_key"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "users_phone_key"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "users_email_key"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "categories_name_key"`);
        await queryRunner.query(`ALTER TABLE "music" ADD CONSTRAINT "FK_eb2faa9b0e0579b8dda67f1ad72" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "music" DROP CONSTRAINT "FK_eb2faa9b0e0579b8dda67f1ad72"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "categories_name_key" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "users_email_key" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "users_phone_key" UNIQUE ("phone")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "users_CPF_key" UNIQUE ("CPF")`);
        await queryRunner.query(`ALTER TABLE "users" ADD "pix" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "music"`);
    }

}
