import { NextRequest, NextResponse } from 'next/server';
import { checkAuthRoutes } from '@/middleware.service';

export const config = {
  matcher: ['/', '/login', '/home,', '/register'],
};

/**
 * MIDDLEWARE
 * @param req
 */
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const authRoutesCheck = await checkAuthRoutes(req, req.url, pathname);
  if (authRoutesCheck) {
    console.log('Redirecting to:', authRoutesCheck);
    return NextResponse.redirect(authRoutesCheck);
  }

  console.log('Proceeding to next response');
  return NextResponse.next();
}
