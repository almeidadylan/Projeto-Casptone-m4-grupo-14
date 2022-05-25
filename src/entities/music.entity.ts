import { Entity, Column, PrimaryColumn, ManyToOne, ManyToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Categories } from "./category.entity";
import { Users } from "./users.entity";

@Entity()
export class Musics {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  id_user: string;

  @Column()
  id_category: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
