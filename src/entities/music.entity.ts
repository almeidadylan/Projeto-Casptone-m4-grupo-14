import { Entity, Column, PrimaryColumn, DataSource, ManyToOne, ManyToMany, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Categories } from "./category.entity";
import { Users } from "./users.entity";
 
@Entity()
export class Music {
  @PrimaryColumn("uuid")
  readonly id: string;

  @ManyToOne(() => Users)
  user: Users;

  @ManyToMany(() => Categories)
  category: Categories;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({
    nullable: true
  })
  letter: string;

  @Column({
    nullable: true
  })
  size: string;

  @Column()
  id_user: number;

  @Column()
  id_category: number;

  @CreateDateColumn()
  created_at: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

