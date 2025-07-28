import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  // Delete token from cookie
  const cookieStore = await cookies();
  cookieStore.delete("token");
  return NextResponse.json({ message: "Logged out" }, { status: 200 });
}
