import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

const publicPaths = ["/login", "/signup"];

const privatePaths = ["/my-videos", "/my-profile"];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  console.log(token);
  const isAuthPage = publicPaths.includes(req.nextUrl.pathname);
  const isPrivatePage = privatePaths.includes(req.nextUrl.pathname);
  console.log(req, "request");

  // If the user is authenticated and tries to access an auth page, redirect to home
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // If the user is unauthenticated and trying to access a private route
  if (!token && isPrivatePage) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", req.url); // Append callbackUrl
    return NextResponse.redirect(loginUrl); // Redirect to the login page
  }

  return NextResponse.next(); // Allow access for all other pages
}

// Config for middleware to match all routes except _next, api, static, and favicon.ico
export const config = {
  matcher: "/((?!_next|api|static|favicon.ico).*)",
};
