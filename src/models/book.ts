// src/entity/User.ts
// import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";




@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  bookId: number;

  @Column()
  bookName: string;

}


