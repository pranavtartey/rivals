import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  console.log(
    `[health] hit by "${request.headers.get("user-agent") ?? "unknown"}"`
  );

  return NextResponse.json({ status: "unhealthy" }, { status: 503 });
}
