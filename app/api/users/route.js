import User from "../../(models)/User";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
        }

        console.log("Creating user:", { email, password });

        // Create user
        await User.create({ email, password });

        return NextResponse.json({ message: "User created successfully" }, { status: 201 });
    } catch (error) {
        console.error("User creation error:", error);
        return NextResponse.json({ message: "Error creating user", error: error.message }, { status: 500 });
    }
}
