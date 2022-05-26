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
  email: string;

  @Column()
  CPF: string;

  @Column()
  birth_date: string;

  @Column()
  phone: string;


  @Column()
  password: string;

  @Column()
  age: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
