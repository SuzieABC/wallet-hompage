import { NextResponse, NextRequest } from "next/server";
import { fallbackLng, locales } from "@/utils/localization/settings";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the default locale is in the pathname
  if (pathname.startsWith(`/${fallbackLng}`)) {
    // Fallback locale이 경로에 포함된 경우, 이를 제거하여 리다이렉트
    return NextResponse.redirect(
      new URL(
        pathname.replace(`/${fallbackLng}`, pathname === `/${fallbackLng}` ? "/" : ""),
        request.url
      )
    );
  }

  // Check if the pathname is missing any locale
  const pathnameIsMissingLocale = !locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    // locale이 없는 경로일 경우 rewrite
    return NextResponse.rewrite(new URL(`/${fallbackLng}${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    // 특정 경로에만 미들웨어가 적용되도록 matcher 설정
    "/((?!api|.*\\..*|_next/static|_next/image|manifest.json|assets|favicon.ico).*)",
  ],
};
