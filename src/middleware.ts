// middleware.ts
import { NextResponse, NextRequest } from "next/server";
import { getAuth } from "firebase/auth";
import { app } from "./firebase"; // Ensure this path is correct

const auth = getAuth(app);

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken"); // Assuming you use a token in cookies

  // Check if the user is authenticated
  if (!token) {
    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  // Continue to the requested page if authenticated
  return NextResponse.next();
}

export const config = {
  matcher: ["/coinpage"], // Define the routes you want to protect
};
