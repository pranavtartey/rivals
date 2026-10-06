import { NextRequest, NextResponse } from "next/server";

// Never cache: a health check has to answer from the running server, not from build output.
export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  // Shows up in the container logs, so a probe hit can be seen without the build log.
  console.log(
    `[health] hit by "${request.headers.get("user-agent") ?? "unknown"}"`
  );

  return NextResponse.json({
    status: "ok",
    uptimeSeconds: Math.round(process.uptime()),
  });
}
