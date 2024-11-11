import { NextResponse, NextRequest } from "next/server";
import { fallbackLng, locales } from "@/utils/localization/settings";

export function middleware(request: NextRequest) {  
  const pathname = request.nextUrl.pathname;

  // Check if the default locale is in the pathname
  if (pathname.startsWith(`/${fallbackLng}`)) {
    return NextResponse.redirect(
      new URL(pathname.replace(`/${fallbackLng}`, pathname === `/${fallbackLng}` ? "/" : ""), request.url)
    );
  }

  // Check if the pathname is missing any locale
  const pathnameIsMissingLocale = !locales.some(locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (pathnameIsMissingLocale) {
    return NextResponse.rewrite(new URL(`/${fallbackLng}${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    "/((?!api|.*\\..*|_next/static|_next/image|manifest.json|assets|favicon.ico).*)",
  ],
};
