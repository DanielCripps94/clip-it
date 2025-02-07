import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

const publicPaths = ["/login", "/signup"];

const privatePaths = ["/my-videos", "/my-profile"];

interface AuthMiddlewareProps {
  request: NextRequest;
  next: Function;
}

export async function AuthMiddleware({ request, next }: AuthMiddlewareProps) {
  const { nextUrl, url } = request;
  const token = await getToken({ req: request });
  const isAuthPage = publicPaths.includes(nextUrl.pathname);
  const isPrivatePage = privatePaths.includes(nextUrl.pathname);

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL("/", url));
  }

  if (!token && isPrivatePage) {
    const loginUrl = new URL("/login", url);
    loginUrl.searchParams.set("callbackUrl", url);
    return NextResponse.redirect(loginUrl);
  }

  return next();
}
