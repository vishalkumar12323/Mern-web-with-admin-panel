import { z } from "zod";

const signupSchema = z.object({
  fName: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { msg: "Name must be at least of 3 characters" })
    .max(100, { message: "Name must not be more than 255 characters" }),
  lName: z
    .string({ required_error: "Last name is required" })
    .trim()
    .min(3, { msg: "Last name must be at least of 3 characters" })
    .max(100, { message: "Last name must not be more than 255 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least of 6 characters" })
    .max(1024, "Password can't be greater than 1024 characters"),
  confirmPassword: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least of 6 characters" })
    .max(1024, "Password can't be greater than 1024 characters"),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 characters" })
    .max(20, { message: "Phone must not be more than 20 characters" }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(5, { message: "Email must be at least of 3 characters" })
    .max(20, { message: "Email must not be more than 20 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least of 6 characters" })
    .max(1024, "Password can't be greater than 1024 characters"),
});
export { signupSchema, loginSchema };
