import { User } from "../schemas/userSchema.js";
import { Contact } from "../schemas/contactSchema.js";

async function Home(req, res) {
  res.status(200).send("WELCOME TO MERN WEB");
}

async function Signup(req, res) {
  const user = req.body;
  try {
    const userExist = await User.findOne({ email: user.email });

    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }
    const userCreated = await User.create(user);
    res.status(201).json({
      message: "Registeration successfully",
      token: await userCreated.generateJWT(),
      userId: userCreated._id.toString(),
    });
  } catch (e) {
    console.log("error", e);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function Login(req, res) {
  const user = req.body;
  try {
    const foundedUser = await User.findOne({ email: user.email });

    if (!foundedUser) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await foundedUser.comparePassword(user.password);
    if (isPasswordValid) {
      res.status(200).json({
        message: "Login successful",
        token: await foundedUser.generateJWT(),
        userId: foundedUser._id.toString(),
      });
    }
  } catch (e) {
    console.log("e" + e);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function ContactForm(req, res) {
  const contactDetails = req.body;
  try {
    await Contact.create(contactDetails);
    return res.status(200).json({ message: "message send successfully" });
  } catch (e) {
    return res.status(500).json({ message: "message not delivered" });
  }
}

async function user(req, res) {
  try {
    res.status(200).json(req.user);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

export { Home, Signup, Login, ContactForm, user };
