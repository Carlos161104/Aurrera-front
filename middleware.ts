import { NextRequest, NextResponse } from "next/server";
import { TOKEN_NAME } from "./constants";

export default function MiddleWare(req: NextRequest) {
    const token = req.cookies.get(TOKEN_NAME)?.value;
    
    // If the request is for the dashboard and there's no token, redirect to login
    if (req.nextUrl.pathname.startsWith('/dashboard')) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
    }
    
    // If the request is for the root and not already on login, redirect to dashboard
    if (req.nextUrl.pathname === '/' && !req.nextUrl.pathname.startsWith('/login')) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }
    
    // If the request is for login and there's a token, redirect to dashboard
    if (req.nextUrl.pathname.startsWith('/login') && token) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }
    
    return NextResponse.next();
}