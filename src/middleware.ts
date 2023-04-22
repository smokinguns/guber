import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { v4 as uuid } from 'uuid';

export function middleware(request: NextRequest) {
console.log('jjjjjujjj')
   // Clone the request headers
  // You can modify them with headers API: https://developer.mozilla.org/en-US/docs/Web/API/Headers
  const requestHeaders = new Headers(request.headers)

  // Add new request headers
  requestHeaders.set('x-request-id', uuid().toString())


  // Update an existing request header
 

  // You can also set request headers in NextResponse.rewrite
  return NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  })
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  }