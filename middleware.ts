import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const ARAB_COUNTRIES = ['SA', 'AE', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'OM', 'QA', 'SY', 'TN', 'YE', 'BH'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, '') || '/';
    const response = NextResponse.redirect(url);
    response.cookies.set('NEXT_LOCALE', 'en', { path: '/' });
    return response;
  }

  if (pathname.startsWith('/ar')) {
    return intlMiddleware(request);
  }

  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const country = (request as NextRequest & { geo?: { country?: string } }).geo?.country || 'US';
  const locale =
    cookieLocale === 'en' || cookieLocale === 'ar'
      ? cookieLocale
      : ARAB_COUNTRIES.includes(country)
        ? 'ar'
        : 'en';

  if (locale === 'en') {
    return intlMiddleware(request);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/ar${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|\\.well-known|.*\\..*).*)'],
};
