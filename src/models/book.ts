import { Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class book {

    @PrimaryGeneratedColumn()
    id!: number


}
