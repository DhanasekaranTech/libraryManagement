
import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";




@Entity()
export class book {
  @PrimaryGeneratedColumn()
  bookId!: number;

  @Column()
  bookName!: string;

    constructor(bookId?: number, bookName?: string){
        if (bookId) this.bookId=bookId;
        if (bookName) this.bookName=bookName;

    }
}

