import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import { DB } from "./utils/db.js";
import { router } from "./routers/router.js";
import { handleErrors } from "./errors/error.js";

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/auth", router);
app.use(handleErrors);

async function startServer() {
  await DB(process.env.URL);
  app.listen(port, function () {
    console.log(`Connect On Port ${port}`);
  });
}

startServer();
