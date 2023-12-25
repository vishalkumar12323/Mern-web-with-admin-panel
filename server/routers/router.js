import express from "express";
import { Home, Signup } from "../controllers/pathHandlers.js";
const router = express.Router();

router.route("/").get(Home);

router.route("/signup").post(Signup);

export { router };
