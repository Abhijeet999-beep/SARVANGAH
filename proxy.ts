import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/login(.*)',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/sso-callback(.*)',
]);

const isAuthRoute = createRouteMatcher([
  '/login(.*)',
  '/sign-in(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // If user is already authenticated and visits /login or /sign-in, redirect to /
  if (userId && isAuthRoute(req)) {
    const homeUrl = new URL('/', req.url);
    return Response.redirect(homeUrl);
  }

  // If user is unauthenticated and visits a protected route, redirect to /login
  if (!isPublicRoute(req)) {
    await auth.protect({
      unauthenticatedUrl: new URL('/login', req.url).toString(),
    });
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};