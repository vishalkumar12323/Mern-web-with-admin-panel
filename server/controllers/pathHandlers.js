import { User } from "../schemas/userSchema.js";

async function Home(req, res) {
  res.status(200).send("WELCOME TO MERN WEB");
}

async function Signup(req, res) {
  const user = req.body;
  try {
    res.status(200).send({ user });
  } catch (e) {
    console.log(e);
    res.status(500).send({ msg: "Internal Server Error" });
  }
}

export { Home, Signup };
