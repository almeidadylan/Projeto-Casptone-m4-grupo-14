import { Entity, Column, PrimaryColumn, DataSource } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Music {
  @PrimaryColumn("uuid")
  readonly id: string;

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