import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createMusicsTableMigration1652903035775
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {}

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("musics");
  }
}
