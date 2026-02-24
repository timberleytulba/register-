import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCookieName, verifyAdminToken } from "./lib/adminAuth";
export const config = { matcher: ["/admin/:path*"] };
export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  if (path.startsWith("/admin/login")) return NextResponse.next();
  const token = req.cookies.get(getCookieName())?.value;
  if (!token) return NextResponse.redirect(new URL("/admin/login", req.url));
  try { await verifyAdminToken(token); return NextResponse.next(); }
  catch { return NextResponse.redirect(new URL("/admin/login", req.url)); }
}
