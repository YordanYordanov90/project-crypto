import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes (e.g., sign-in and sign-up pages)
const isPublicRoute = createRouteMatcher(["/signin(.*)", "/signup(.*)"]);

export default clerkMiddleware((auth, request) => {
  // Protect all routes that are not public
  if (!isPublicRoute(request)) {
    auth().protect(); // This ensures the user must be signed in
  }
});

export const config = {
  matcher: [
    // Define routes that will use this middleware
    "/coinpage", // Protect the coinpage route
    "/coinpage/(.*)", // Protect all sub-routes under coinpage, if any
    "/(api|trpc)(.*)", // Protect API routes as well
  ],
};
