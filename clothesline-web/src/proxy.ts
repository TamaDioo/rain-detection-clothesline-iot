import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middleware/withAuth";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function middleware(request: NextRequest) {
  return NextResponse.next();
}

export default withAuth(middleware, ["/dashboard"]);

export const config = {
  matcher: ["/dashboard/:path*"],
};
