import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your username",
  password: "your password",
  database: "Library",
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: [],
});

export const checkConnection = async () => {
  try {
    await AppDataSource.initialize();
    console.log("db connected successfully");
  } catch (error) {
    console.log("cannot connect to db");
  }
};
