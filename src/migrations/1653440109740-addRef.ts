import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class addRef1653440109740 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      "musics",
      new TableForeignKey({
        name: "UsersFK",
        columnNames: ["id_user"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
      })
    );

    await queryRunner.createForeignKey(
      "musics",
      new TableForeignKey({
        name: "CategoriesFK",
        columnNames: ["id_category"],
        referencedColumnNames: ["id"],
        referencedTableName: "categories",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("musics", "UsersFK");
    await queryRunner.dropForeignKey("musics", "CategoriesFK");
  }
}
