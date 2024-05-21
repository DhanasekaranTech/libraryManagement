import { DataSource } from "typeorm";
import "dotenv/config";
import { User} from "./models/userTable"
import { Book } from "./models/bookTable";
import{UserBook} from "./models/userBookTable"


export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [User,Book,UserBook],
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
