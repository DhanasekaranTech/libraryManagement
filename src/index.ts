import "reflect-metadata";
import express, { Application, Request, Response } from "express";
import userRoutes from './routes/userRoutes'
import { AppDataSource, checkConnection } from "./dbConfig";
import {config} from 'dotenv';

//configuration dotenv
config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/user", userRoutes);

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "successssss" });
});

app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
  checkConnection();
});
