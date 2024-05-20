import { DataSource } from "typeorm";
import "dotenv/config";
const path = require('path')


export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOSTNAME,
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  logging: true,
  entities: [path.join(process.cwd(), 'src/models/*.ts')],
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
