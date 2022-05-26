import { Entity, Column, PrimaryColumn, OneToOne, ManyToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Categories } from "./category.entity";
import { Users } from "./users.entity";

@Entity()
export class Musics {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToMany(() => Users)
  users: Users;

  @OneToOne(() => Categories)
  categories: Categories;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  id_user: string;

  @Column()
  id_category: string;

  @Column({ nullable: true })
  letter?: string;

  @Column({ nullable: true })
  size?: number;

  @Column()
  created_at: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
    if (!this.created_at) {
      this.created_at = new Date() + "";
    }
  }
}