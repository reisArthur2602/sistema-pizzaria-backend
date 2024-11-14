import "dotenv/config";
import "express-async-errors";
import express from "express";
import cors from "cors";

import bodyParser from "body-parser";
import { ErrorMiddleware } from "../middlewares/error.middleware";
import { MainRouter } from "./main.routes";
import fileUpload from "express-fileupload";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);
app.use(MainRouter);

app.use(ErrorMiddleware);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
