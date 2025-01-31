import User from "../../(models)/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// 🔹 POST: Register a new user with a hashed password
export async function POST(req) {
  try {
    // Parse the incoming JSON request body
    const { email, password, name } = await req.json();

    // Log the incoming request for debugging purposes
    console.log("Received data for user creation:", { email, password, name });

    // Validate required fields
    if (!email || !password || !name) {
      return NextResponse.json({ message: "Email, password, and name are required" }, { status: 400 });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the new user in the database
    await User.create({ email, password: hashedPassword, name });

    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
  } catch (error) {
    // Log the error for debugging
    console.error("User creation error:", error);

    // Return a detailed error message to the client
    return NextResponse.json({ message: "Error creating user", error: error.message }, { status: 500 });
  }
}

// 🔹 POST: Login and authenticate user
export async function LOGIN(req) {
  try {
    // Parse the incoming JSON request body
    const { email, password } = await req.json();

    // Log the incoming login data for debugging purposes
    console.log("Received data for user login:", { email });

    // Validate required fields
    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    // Log the error for debugging
    console.error("Login error:", error);

    // Return a detailed error message to the client
    return NextResponse.json({ message: "Error logging in", error: error.message }, { status: 500 });
  }
}
