import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Mock user for testing
const mockUser = {
  email: "example@gmail.com",
  password: "123456",
};

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (email === mockUser.email && password === mockUser.password) {
    const token = jwt.sign({ email }, "123456", { expiresIn: "1h" });

    const response = NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );

    // Set JWT in HttpOnly cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60, // 1 hour
    });

    return response;
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
