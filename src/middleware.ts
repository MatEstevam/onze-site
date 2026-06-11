import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isStatic = pathname.startsWith("/_next/") || pathname.startsWith("/fonts/") || pathname.startsWith("/athletes/") || pathname.startsWith("/videos/") || pathname.includes(".");
  if (isStatic) return NextResponse.next();

  const sitePassword = process.env.SITE_PASSWORD;
  if (!sitePassword) return NextResponse.next();

  const authCookie = request.cookies.get("site-auth")?.value;
  if (authCookie === sitePassword) return NextResponse.next();

  if (pathname.startsWith("/gate") || pathname === "/privacidade") return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/gate";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
