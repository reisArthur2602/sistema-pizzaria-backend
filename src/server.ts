import "dotenv/config";
import "express-async-errors";
import express  from "express";
import cors from "cors";

import { router } from "./routes";
import bodyParser from "body-parser";
import { isError } from "./middlewares/isError";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(router);

app.use(isError);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
