import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class UserBook {
  @PrimaryGeneratedColumn()
  UB_ID: number;

  @Column()
  bookName: string;

  @Column()
  userId: number;

  @Column()
  userName: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;
}
