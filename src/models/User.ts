import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userid!: number;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @Column({default:"user"})
  role!: string;

  
}
