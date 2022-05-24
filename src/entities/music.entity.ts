import { Entity, Column, PrimaryColumn, DataSource, ManyToOne, ManyToMany } from "typeorm";
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

  pix: string;

  @Column()
  url: string;

  @Column()
  description: string;

  @Column()
  id_user: number;

  @Column()
  id_category: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

