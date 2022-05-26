import { Entity, Column, PrimaryColumn, ManyToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Musics } from "./music.entity";

@Entity()
export class Users {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToMany(() => Musics, (musics) => musics.id_user)
  musics: Musics;

  @Column()
  name: string;

  @Column()
  CPF: string;

  @Column({
    nullable: true
  })
  birth_date: string;

  @Column({
    nullable: true
  })
  age: number;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

