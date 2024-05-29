import { DataSource } from "typeorm";
import "dotenv/config";
const path = require("path");
import { config } from "dotenv";
config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOSTNAME,
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  logging: false,
  entities: [path.join(process.cwd(), "src/models/*.ts")],
  migrations: ["./src/migration/*.ts"],
  migrationsTableName: "book_migration_table",
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

// checkConnection();