import { Entity, Column, PrimaryColumn, OneToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Musics } from "./music.entity";

@Entity()
export class Categories {
  @PrimaryColumn("uuid")
  readonly id: string;

  @OneToOne(() => Musics, (musics) => musics.id_category)
  musics: Musics;

  @Column()
  name: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}