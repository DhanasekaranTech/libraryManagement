import express, { Application, Request, Response } from "express";
import { AppDataSource, checkConnection } from "./dbConfig";
import { router } from "./routes/adminRoutes"
import * as dotenv from "dotenv";

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 7890;

app.use(express.json());
// app.use("/user", router);
app.use("/admin", router);

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "successssss" });
});

app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`);
  checkConnection();
});
