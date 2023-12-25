import express from "express";
import {
  Home,
  Signup,
  Login,
  ContactForm,
} from "../controllers/pathHandlers.js";
import { signupSchema, loginSchema } from "../schemas/zodSchema.js";
import { validate } from "../middlewares/validateSchema.js";
const router = express.Router();

router.route("/").get(Home);

router.route("/signup").post(validate(signupSchema), Signup);

router.route("/login").post(validate(loginSchema), Login);

router.route("/contact").post(ContactForm);
export { router };
