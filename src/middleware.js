// import { cookies } from "next/headers";
// import { NextResponse } from "next/server"

// export const middleware = async (request) => {
//     const token = await cookies(request).get('__Secure-next-auth.session-token');
//     const pathname = request.nextUrl.pathname
//     if (pathname.includes('api')) {
//         return NextResponse.next();
//     }
//     if (!token) {
//         return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
//     }
//     return NextResponse.next();
// }

// export const config = {
//     matcher: ["/my-bookings/:path*", "/services/:path*"],
// };

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
    const cookieStore = cookies(request);  // Get cookies from the request.
    const token = cookieStore.get('next-auth.session-token'); // Correctly access the session token.
    const pathname = request.nextUrl.pathname; // Get the requested URL's pathname.

    // Allow requests to API routes without checking authentication.
    if (pathname.includes('api')) {
        return NextResponse.next();
    }

    // If the token is missing and the requested path is not the login page, redirect to login.
    if (!token && pathname !== '/login') {
        // Redirect to the login page and store the current path in the query parameter `redirect`.
        return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
    }

    // Proceed with the request if a valid token is found or if it's a request to the login page.
    return NextResponse.next();
}

export const config = {
    matcher: ["/my-bookings/:path*", "/services/:path*"], // Protect the specified routes.
};
