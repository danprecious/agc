import { NextResponse } from "next/server";
import { signIn } from "../../../../auth";

export async function POST(request) {
  const data = await request.json();

  const { email, password } = data;

  if (email && password) {
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log(response); 
      return NextResponse.json(response, {
        statusText: "Login successful",
        status: "200",
      });
    } catch (error) {
      return NextResponse.json(error, {
        statusText: "Failed to login with credentials",
        status: "401",
      });
    }
  } else {
    return NextResponse.json("Error signing in", {
      statusText: "invalid credentials",
      status: "401",
    });
  }
}
