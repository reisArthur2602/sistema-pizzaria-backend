import "dotenv/config";
import "express-async-errors";
import express from "express";
import cors from "cors";
import path from "path";

import bodyParser from "body-parser";
import { ErrorHandler } from "../middlewares/errosHandler";
import { MainRouter } from "./main.routes";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(MainRouter);

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "..", "..", "tmp"))
);
app.use(ErrorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
