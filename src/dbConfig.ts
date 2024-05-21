import { DataSource } from "typeorm";
import "dotenv/config";
const path = require('path')

export const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: process.env.DATABASE_HOSTNAME,
  username: process.env.DATABASE_USERNAME,
  password:"password",

  // password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [path.join(process.cwd(), 'src/models/*.ts')],
  migrations: [],
  subscribers: [],
});

export const checkConnection = async () => {
  try {
    await AppDataSource.initialize();
    console.log("db connected successfully");
  } catch (error) {

    console.log(error);
  }
};
