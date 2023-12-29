import dotenv from "dotenv";
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { DB } from "./utils/db.js";
import { router } from "./routers/router.js";
import { handleErrors } from "./errors/error.js";

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
// body data parsing middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// router middleware.
app.use("/api/auth", router);
app.use("/api", router);

// handle erros.
app.use(handleErrors);

async function startServer() {
  await DB(process.env.URL);
  app.listen(port, function () {
    console.log(`Connect On Port ${port}`);
  });
}

startServer();
