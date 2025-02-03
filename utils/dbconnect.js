import mongoose from "mongoose";

async function dbConnect() {
  if (!mongoose.connection.readyState) {
    mongoose
      .connect(process.env.MONGODB_KEY)
      .then(() => console.log("Connected to MongoDB"))
      .catch((err) => console.error("MongoDB connection error:", err));
  }
}

export default dbConnect;
