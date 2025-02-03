import User from "../../(models)/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"; // Use bcrypt for password security

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Check password using bcrypt
    const hashpass = await bcrypt.hash(password, 0);
    const isValid = await bcrypt.compare(hashpass, user.password);
    console.log(password);
    console.log(user.password);
    console.log(isValid);
    if (!isValid) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Server error", error: error.message },
      { status: 500 }
    );
  }
}
