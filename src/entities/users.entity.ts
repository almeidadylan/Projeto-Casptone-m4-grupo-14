import { Entity, Column, PrimaryColumn, DataSource, ManyToMany, OneToMany, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Users {
  @PrimaryColumn("uuid")
  readonly id: string;

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
