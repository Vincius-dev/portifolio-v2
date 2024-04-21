import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'pt-BR'],
 
  // Used when no locale matches
  defaultLocale: 'pt-BR'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt-BR|en)/:path*']
};