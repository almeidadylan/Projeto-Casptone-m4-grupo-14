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
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
