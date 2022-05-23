"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRefToMusicsMigration1652903062749 = void 0;
const typeorm_1 = require("typeorm");
class addRefToMusicsMigration1652903062749 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createForeignKey("musics", new typeorm_1.TableForeignKey({
                name: "UsersFK",
                columnNames: ["id_user"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
            }));
            yield queryRunner.createForeignKey("musics", new typeorm_1.TableForeignKey({
                name: "CategoriesFK",
                columnNames: ["id_category"],
                referencedColumnNames: ["id"],
                referencedTableName: "categories",
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropForeignKey("musics", "UsersFK");
            yield queryRunner.dropForeignKey("musics", "CategoriesFK");
        });
    }
}
exports.addRefToMusicsMigration1652903062749 = addRefToMusicsMigration1652903062749;
