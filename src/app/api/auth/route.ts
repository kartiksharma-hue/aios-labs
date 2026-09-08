import { NextRequest, NextResponse } from "next/server";

/**
 * Step 1 of the GitHub OAuth flow for the Decap CMS admin (/admin).
 * Redirects the popup to GitHub's authorize screen. Needs two env vars set
 * in the hosting project: OAUTH_GITHUB_CLIENT_ID and OAUTH_GITHUB_CLIENT_SECRET
 * (from a GitHub OAuth App whose callback URL is <site>/api/callback).
 */
export const runtime = "nodejs";

export function GET(req: NextRequest) {
  const clientId = process.env.OAUTH_GITHUB_CLIENT_ID;
  if (!clientId) {
    return new NextResponse(
      "GitHub OAuth is not configured. Set OAUTH_GITHUB_CLIENT_ID and OAUTH_GITHUB_CLIENT_SECRET.",
      { status: 500 },
    );
  }
  const origin = new URL(req.url).origin;
  const authorize = new URL("https://github.com/login/oauth/authorize");
  authorize.searchParams.set("client_id", clientId);
  authorize.searchParams.set("redirect_uri", `${origin}/api/callback`);
  authorize.searchParams.set("scope", "repo");
  authorize.searchParams.set("state", Math.random().toString(36).slice(2));
  return NextResponse.redirect(authorize.toString());
}
