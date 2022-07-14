import express, { Request, Response } from "express";
import { routes } from "./routes";

const app = express();
app.use(express.json());
app.get("/bananada", (req: Request, res: Response) => {
  console.log("Hello World");
  res.send("hello World!");
});
app.use(routes);

app.listen(3000, () => {
  console.log("server is running on http://localhost:3000");
});
