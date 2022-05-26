import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createMusicsTable1653440093391 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "musics",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "url",
            type: "varchar",
          },
          {
            name: "id_user",
            type: "uuid",
          },
          {
            name: "id_category",
            type: "uuid",
          },
          {
            name: "letter",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "size",
            type: "numeric",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}