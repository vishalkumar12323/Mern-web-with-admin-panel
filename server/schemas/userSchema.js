import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Hashing user password using bcryptjs package.
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified) {
    return next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, saltRound);
    const hashedCpassword = await bcrypt.hash(user.confirmPassword, saltRound);
    user.password = hashedPassword;
    user.confirmPassword = hashedCpassword;
  } catch (e) {
    return next(e);
  }
});

// Comparing user password using bcryptjs package;
userSchema.methods.comparePassword = async function (password, next) {
  try {
    const comparedPassword = bcrypt.compare(password, this.password);
    return comparedPassword;
  } catch (e) {
    next(e);
  }
};

// Generating json web token (JWT) using jwt package.
userSchema.methods.generateJWT = async function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (e) {
    console.log("The Token Error:" + e);
  }
};

const User = new mongoose.model("user", userSchema);
export { User };
