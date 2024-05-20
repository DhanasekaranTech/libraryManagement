import { DataSource } from "typeorm";
import { User } from "./models/User";
import 'dotenv/config'

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOSTNAME,
  port: parseInt(process.env.DB_PORT as string),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [User],
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

// checkConnection();