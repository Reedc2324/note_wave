import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

// Database connection
if (!mongoose.connection.readyState) {
    mongoose.connect("mongodb+srv://reedc2324:Concon2324@notewave.ghtjd.mongodb.net/notewave")
        .then(() => console.log("Connected to MongoDB"))
        .catch(err => console.error("MongoDB connection error:", err));
}

// User Schema
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true }, // Remove `unique` if name doesn't need to be unique
});

// Password hashing middleware
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        // Hash password before saving
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
    }
    next();
});

// Model export
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
