import jwt from "jsonwebtoken";
import { User } from "../schemas/userSchema.js";

async function verifyUser(req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTP, Token not provided" });
  }

  const jwtToken = token.replace("Bearer", "").trim();
  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_KEY);
    const user = await User.findOne({ email: isVerified.email }).select({
      password: 0,
      confirmPassword: 0,
      phone: 0,
    });

    req.token = token;
    req.user = user;
    req.userId = user._id;
    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: "Unauthorized. Invalid token." });
  }
}

export { verifyUser };
