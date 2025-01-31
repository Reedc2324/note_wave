import mongoose, { Schema } from "mongoose";

if (!mongoose.connection.readyState) {
    mongoose.connect("mongodb+srv://reedc2324:Concon2324@notewave.ghtjd.mongodb.net/notewave")
        .then(() => console.log("Connected to MongoDB"))
        .catch(err => console.error("MongoDB connection error:", err));
}

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
