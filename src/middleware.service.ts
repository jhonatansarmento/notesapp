import { getToken } from 'next-auth/jwt';
import { NextRequest } from 'next/server';

/**
 * REDIRECT
 * @param destination
 * @param origin
 */
async function nextRedirect(destination: string, origin: string) {
  return new URL(destination, origin);
}

/**
 * CHECK AUTH ROUTES
 * @param req
 * @param url
 * @param pathname
 */
export const checkAuthRoutes = async (
  req: NextRequest,
  url: string,
  pathname: string
) => {
  const token = await getToken({ req, secret: process.env.SECRET_KEY });

  if (token) {
    if (pathname === '/' || pathname === '/login' || pathname === '/register') {
      console.log('Redirecting to /home from /, /login, or /register');
      return nextRedirect('/home', url);
    }
  } else {
    if (pathname === '/' || pathname === '/home') {
      console.log('Redirecting to /login from / or /home');
      return nextRedirect('/login', url);
    }
  }

  return false;
};
