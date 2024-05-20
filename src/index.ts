import "reflect-metadata";
import express, { Application, Request, Response } from "express";
import userRoutes from './routes/userRoutes'
import { AppDataSource, checkConnection } from "./dbConfig";
import 'dotenv/config'

const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string) || 5000;

app.use(express.json());
app.use("/user", userRoutes);
//app.use("/admin", adminRoutes);

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "successssss" });
});

app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
  checkConnection();
});
