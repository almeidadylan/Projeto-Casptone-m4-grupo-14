import { Entity, Column, PrimaryColumn, ManyToOne, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Music } from "./music.entity";
@Entity()
export class Users {
  @PrimaryColumn("uuid")
  readonly id: string;

  @OneToMany(() => Music, (music) => music.user)
  musics: Music[];

  @Column()
  name: string;

  @Column()
  CPF: string;

  @Column()
  birth_date: string;

  @Column()
  phone: string;

  @Column()
  pix: string;

  @Column()
  email: string;

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
