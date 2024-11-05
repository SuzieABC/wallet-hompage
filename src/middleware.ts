import { NextResponse, NextRequest } from "next/server";
import { fallbackLng, locales } from "@/utils/localization/settings";

export function middleware(request: NextRequest) {  
  const pathname = request.nextUrl.pathname;

  // Paths to redirect to the root URL
  const pathsToRootRedirect = [`/${fallbackLng}`, '/products'];

  // Redirect to root if the current pathname matches any path
  if (pathsToRootRedirect.includes(pathname) || pathname === `/${fallbackLng}/`) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Redirect /en/products to /en
  if (locales.some(locale => pathname === `/${locale}/products`)) {
    const locale = pathname.split('/')[1];
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

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
