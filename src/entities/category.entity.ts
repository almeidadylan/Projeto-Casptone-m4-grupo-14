import { Entity, Column, PrimaryColumn, ManyToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Music } from "./music.entity";

@Entity()
export class Category {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToMany(() => Music, (music) => music.category)
  musics: Music[];

  @Column()
  name: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
