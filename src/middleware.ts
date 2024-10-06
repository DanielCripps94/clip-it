import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

const publicPaths = ["/login", "/signup"];

const privatePaths = ["/my-videos", "/my-profile"];

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const isAuthPage = publicPaths.includes(req.nextUrl.pathname);
  const isPrivatePage = privatePaths.includes(req.nextUrl.pathname);

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!token && isPrivatePage) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|api|static|favicon.ico).*)",
};
