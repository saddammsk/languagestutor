import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

const ARAB_COUNTRIES = ['SA', 'AE', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'OM', 'QA', 'SY', 'TN', 'YE', 'BH'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/en') || pathname.startsWith('/ar')) {
    return intlMiddleware(request);
  }

  const country = (request as NextRequest & { geo?: { country?: string } }).geo?.country || 'US';
  const locale = ARAB_COUNTRIES.includes(country) ? 'ar' : 'en';

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|favicon.ico|\\.well-known|.*\\..*).*)'],
};
