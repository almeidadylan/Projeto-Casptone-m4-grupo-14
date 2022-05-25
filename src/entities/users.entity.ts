import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Users {
  @PrimaryColumn("uuid")
  readonly id: string;

  @Column()
  name: string;

  @Column()
  CPF: string;

  @Column()
  birth_date: string;

  @Column()
  phone: string;

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
