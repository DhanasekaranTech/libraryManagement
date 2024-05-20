import { DataSource } from "typeorm";
import { Book } from "./models/book";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "task",
  database: "Library",
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
