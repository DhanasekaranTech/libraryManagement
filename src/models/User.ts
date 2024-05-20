import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userid!: number;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  constructor(username?: string, password?: string) {
    if (username) this.username = username;
    if (password) this.password = password;
  }
}
