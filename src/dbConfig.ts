import { DataSource } from "typeorm";
import { Book } from "./models/book";
import 'dotenv/config'

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: parseInt(process.env.DB_port as string),
  username: process.env.username,
  password: process.env.password,
  database: process.env.database,
  synchronize: true,
  logging: false,
  entities: [Book],
  migrations: [],
  subscribers: [],
});

export const checkConnection = async () => {
  try {
    await AppDataSource.initialize();
    console.log("db connected successfully");
  } catch (error) {
    console.log("cannot connect to db" , error);
  }
};
