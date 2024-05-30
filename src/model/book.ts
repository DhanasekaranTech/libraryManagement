import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class book {
  @PrimaryGeneratedColumn("uuid")
  bookId: string;

  @Column()
  bookName: string;
}
