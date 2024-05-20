import express, { Application, Request, Response } from "express";
import { AppDataSource, checkConnection } from "./dbConfig";
import { adminRoutes } from "./routes/adminRoutes";
import "dotenv/config";
const app: Application = express();
const PORT: number = parseInt(process.env.PORT as string) ||2003;

app.use(express.json());
//app.use("/user", userRoutes);
app.use("/admin", adminRoutes);

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "successssss" });
});

app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
  checkConnection();
});
