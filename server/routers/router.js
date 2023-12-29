import express from "express";
import {
  Home,
  Signup,
  Login,
  ContactForm,
  user,
} from "../controllers/pathHandlers.js";
import { signupSchema, loginSchema } from "../schemas/zodSchema.js";
import { validate } from "../middlewares/validateSchema.js";
import { verifyUser } from "../middlewares/verifyUser.js";
const router = express.Router();

router.route("/").get(Home);

router.route("/signup").post(validate(signupSchema), Signup);

router.route("/login").post(validate(loginSchema), Login);

router.route("/contact").post(ContactForm);

router.route("/user").get(verifyUser, user);

export { router };
