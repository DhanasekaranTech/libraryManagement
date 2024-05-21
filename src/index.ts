import "reflect-metadata";
import express, { Application, Request, Response } from "express";
import userRoutes from './routes/userRoutes'
import { AppDataSource, checkConnection } from "./dbConfig";
import {config} from 'dotenv';

//configuration dotenv
config();

import { adminRoutes } from "./routes/adminRoutes";

const app: Application = express();

app.use("/user", userRoutes);
const PORT = process.env.PORT || 2003;

app.use(express.json());
app.use("/admin", adminRoutes);

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "successssss" });
});

app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
  checkConnection();
});