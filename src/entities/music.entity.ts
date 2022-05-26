import { Entity, Column, PrimaryColumn, ManyToOne, ManyToMany, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Categories } from "./category.entity";
import { Users } from "./users.entity";

@Entity()
export class Musics {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToMany(() => Users)
  users: Users;

  @ManyToOne(() => Categories)
  categories: Categories;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({
    nullable: true
  })
  letter?: string;

  @Column({
    nullable: true
  })
  size?: string;

  @Column()
  id_user: string;

  @Column()
  id_category: string;

  @CreateDateColumn()
  created_at: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

