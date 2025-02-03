import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import dbConnect from "@/utils/dbconnect";

// Database connection
await dbConnect();

// User Schema
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true }, // Remove `unique` if name doesn't need to be unique
});

// Password hashing middleware
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    // Hash password before saving
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
  }
  next();
});

// Model export
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
