import express, { Request, Response } from "express";
import axios, { AxiosRequestConfig } from "axios";

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get("/heart-beat", (req: Request, res: Response) => {
  res.send("Im fine!");
});
