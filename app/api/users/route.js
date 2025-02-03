import User from "../../(models)/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// POST: Register a new user with a hashed password
export async function POST(req) {
  try {
    // Ensure database connection

    const { email, password, name } = await req.json();
    console.log("Received data for user creation:", { email, name });

    if (!email || !password || !name) {
      return NextResponse.json(
        { message: "Email, password, and name are required" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    await User.create({ email, password, name });

    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("User creation error:", error);
    return NextResponse.json(
      { message: "Error creating user", error: error.message },
      { status: 500 }
    );
  }
}
